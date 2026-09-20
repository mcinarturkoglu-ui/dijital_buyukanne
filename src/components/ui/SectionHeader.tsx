import { ReactNode } from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "text-sm font-semibold tracking-wider uppercase mb-3",
            light ? "text-turquoise-200" : "text-turquoise"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/70" : "text-navy/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
