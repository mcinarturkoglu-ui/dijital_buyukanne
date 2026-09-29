import fs from 'fs/promises';
import path from 'path';
import os from 'os';

// Global memory cache to retain state across serverless invocations within the same container
const globalStorage = globalThis as unknown as {
  __dataStoreCache?: Record<string, any>;
};

if (!globalStorage.__dataStoreCache) {
  globalStorage.__dataStoreCache = {};
}

/**
 * Safely reads a JSON data file.
 * Priority:
 * 1. Global in-memory cache (fastest, keeps runtime mutations)
 * 2. /tmp directory (writable in serverless AWS Lambda / Vercel)
 * 3. src/data/<filename> (local file / bundled source)
 * 4. Fallback default data
 */
export async function readDataFile<T>(filename: string, defaultData: T): Promise<T> {
  const cacheKey = filename;

  // 1. In-memory cache
  if (globalStorage.__dataStoreCache?.[cacheKey]) {
    return globalStorage.__dataStoreCache[cacheKey] as T;
  }

  // 2. /tmp directory (persistent across calls within same lambda container on Vercel)
  const tmpPath = path.join(os.tmpdir(), filename);
  try {
    const tmpContent = await fs.readFile(tmpPath, 'utf-8');
    const parsed = JSON.parse(tmpContent);
    if (globalStorage.__dataStoreCache) {
      globalStorage.__dataStoreCache[cacheKey] = parsed;
    }
    return parsed as T;
  } catch {
    // File doesn't exist in /tmp yet, continue
  }

  // 3. src/data directory (source repo files)
  const srcPath = path.join(process.cwd(), 'src/data', filename);
  try {
    const srcContent = await fs.readFile(srcPath, 'utf-8');
    const parsed = JSON.parse(srcContent);
    if (globalStorage.__dataStoreCache) {
      globalStorage.__dataStoreCache[cacheKey] = parsed;
    }
    return parsed as T;
  } catch {
    // If not found in src/data
  }

  return defaultData;
}

/**
 * Safely writes a JSON data file.
 * Handles read-only filesystems (Vercel serverless) gracefully:
 * 1. Updates global in-memory cache
 * 2. Tries to write to src/data (succeeds locally)
 * 3. Always writes to /tmp (succeeds on Vercel serverless)
 */
export async function writeDataFile<T>(filename: string, data: T): Promise<boolean> {
  const cacheKey = filename;

  // 1. Immediate in-memory update
  if (globalStorage.__dataStoreCache) {
    globalStorage.__dataStoreCache[cacheKey] = data;
  }

  // 2. Try writing to src/data (works locally in dev)
  const srcPath = path.join(process.cwd(), 'src/data', filename);
  try {
    await fs.writeFile(srcPath, JSON.stringify(data, null, 2), 'utf-8');
  } catch {
    // Expected on Vercel (read-only filesystem) - fail silently
  }

  // 3. Write to /tmp (works in serverless environments like AWS Lambda / Vercel)
  try {
    const tmpPath = path.join(os.tmpdir(), filename);
    await fs.writeFile(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (tmpErr) {
    console.warn(`[server-storage] Failed to write /tmp/${filename}:`, tmpErr);
  }

  return true;
}
