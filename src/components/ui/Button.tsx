import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-white";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none relative overflow-hidden group disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-coral text-white hover:bg-[#e8634f] shadow-lg hover:shadow-glow-coral hover:-translate-y-0.5 focus:ring-coral",
    secondary:
      "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:ring-navy",
    ghost:
      "bg-transparent text-navy hover:bg-soft-gray focus:ring-soft-gray",
    "outline-white":
      "bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white hover:bg-white hover:text-navy shadow-sm hover:shadow-lg hover:-translate-y-0.5 focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-6 py-3.5 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {/* Subtle shine sweep on primary hover */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
