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
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-coral text-white hover:bg-coral-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-coral",
    secondary:
      "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy",
    ghost:
      "bg-transparent text-navy hover:bg-soft-gray focus:ring-soft-gray",
    "outline-white":
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
