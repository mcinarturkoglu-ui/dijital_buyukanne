// Client-side IndexedDB storage for presentation PDF files
// This guarantees that any PDF uploaded in the browser persists across page reloads
// and serverless cold starts with zero size limit issues.

const DB_NAME = 'dijitalbuyukanne_pdf_store';
const STORE_NAME = 'presentations';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export interface StoredPdf {
  blob: Blob;
  filename: string;
  size: number;
  uploadedAt: string;
  type: 'general' | 'rotary';
}

/**
 * Save an uploaded PDF to IndexedDB
 */
export async function savePdfToStorage(
  type: 'general' | 'rotary',
  blob: Blob,
  filename: string
): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const record: StoredPdf = {
      blob,
      filename,
      size: blob.size,
      uploadedAt: new Date().toISOString(),
      type,
    };

    const req = store.put(record, type);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Get stored PDF from IndexedDB
 */
export async function getPdfFromStorage(
  type: 'general' | 'rotary'
): Promise<StoredPdf | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(type);

      req.onsuccess = () => {
        resolve(req.result || null);
      };
      req.onerror = () => {
        resolve(null);
      };
    });
  } catch {
    return null;
  }
}

/**
 * Delete custom PDF from IndexedDB (revert to default)
 */
export async function removePdfFromStorage(
  type: 'general' | 'rotary'
): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(type);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  } catch {
    // ignore
  }
}
