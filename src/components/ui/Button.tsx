import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "accent",
  className,
  children,
}) => {
  const baseStyles =
    "w-full text-xs lg:text-sm py-2.5 lg:py-3 font-semibold rounded-[8px] focus:outline-none focus:ring-2";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    accent: "bg-accent-color text-white hover:bg-black",
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </button>
  );
};
