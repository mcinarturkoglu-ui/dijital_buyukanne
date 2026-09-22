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
        <div className={clsx("mb-4", centered && "flex justify-center")}>
          <span
            className={clsx(
              "inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border",
              light
                ? "text-turquoise bg-turquoise/10 border-turquoise/20"
                : "text-turquoise bg-turquoise/5 border-turquoise/15"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-balance",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-5 text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/65" : "text-navy/55"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
