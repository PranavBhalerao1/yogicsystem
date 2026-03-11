"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-orange-500 text-white shadow-lg shadow-orange-400/20 hover:bg-orange-600",
  secondary: "bg-transparent border border-[var(--color-border)] text-[var(--color-muted)] hover:border-orange-400 hover:text-orange-500",
  ghost: "bg-transparent text-[var(--color-muted)] hover:text-orange-500"
} as const;

type ButtonVariants = keyof typeof buttonVariants;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-5 py-3 text-base md:text-lg"
    }[size];

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition duration-200",
          buttonVariants[variant],
          sizeClasses,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
