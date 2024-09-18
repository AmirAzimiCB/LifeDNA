import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  variant?: "base" | "small" | "smaller";
  className?: string;
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = "base",
  className,
  children,
}) => {
  const baseStyles = "text-text-color font-normal text-[#383B42]";
  const variantStyles = {
    base: "text-[16px] leading-[150%]",
    small: "text-[14px] leading-[120%]",
    smaller: "text-[12px] leading-[130%]",
  };

  return (
    <p className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </p>
  );
};
