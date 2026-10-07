import { ReactNode } from "react";
import clsx from "clsx";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
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
    sm: "w-52 sm:w-56 h-[410px] sm:h-[430px]",
    md: "w-64 sm:w-[270px] h-[450px] sm:h-[470px]",
    lg: "w-72 sm:w-80 h-[495px] sm:h-[515px]",
    xl: "w-80 sm:w-[325px] lg:w-[340px] h-[520px] sm:h-[540px] lg:h-[555px]",
    hero: "w-[290px] sm:w-[325px] lg:w-[350px] xl:w-[370px] h-[485px] sm:h-[515px] lg:h-[535px] xl:h-[555px]",
  };

  return (
    <div className={clsx("relative flex-shrink-0 flex flex-col items-center", className)}>
      {label && (
        <div className="mb-3 whitespace-nowrap z-10 select-none">
          <span className="text-[11px] font-semibold text-white/80 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            <span>{label}</span>
          </span>
        </div>
      )}

      {/* Outer glow ring wrapper */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-[2.75rem] bg-gradient-to-b from-white/10 to-white/5 blur-sm pointer-events-none" />

        <div
          className={clsx(
            "relative rounded-[2.5rem] p-3 shadow-phone-premium",
            sizes[size],
            "bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] border border-white/10"
          )}
        >
          {/* Metallic top edge highlight */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-full" />

          {/* Dynamic Island style notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1a1a2e] ring-1 ring-white/10" />
            <div className="w-1 h-1 rounded-full bg-turquoise/40" />
          </div>

          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden shadow-inner">
            {children}
          </div>

          {/* Bottom indicator bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
