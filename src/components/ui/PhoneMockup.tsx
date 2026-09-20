import { ReactNode } from "react";
import clsx from "clsx";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  dark?: boolean;
}

export function PhoneMockup({
  children,
  className,
  size = "md",
  label,
  dark = false,
}: PhoneMockupProps) {
  const sizes = {
    sm: "w-44 h-[340px]",
    md: "w-56 h-[450px]",
    lg: "w-64 h-[520px]",
  };

  return (
    <div className={clsx("relative flex-shrink-0", className)}>
      {label && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-semibold text-white/70 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
            {label}
          </span>
        </div>
      )}
      <div
        className={clsx(
          "relative rounded-[2.5rem] p-3 shadow-phone",
          sizes[size],
          dark
            ? "bg-[#1a1a2e] border-2 border-white/10"
            : "bg-[#1a1a2e] border-2 border-white/10"
        )}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-10" />
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
