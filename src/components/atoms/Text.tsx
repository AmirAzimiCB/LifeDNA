import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  variant?: "base" | "small" | "smaller" | "paragraph";
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
    base: "text-base lg:text-[16px] leading-[150%]",
    small: "text-base lg:text-base leading-[150%] lg:leading-[120%]",
    smaller: "text-base leading-[130%]",
    paragraph: "text-sm leading-[130%]",
  };

  return (
    <p className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </p>
  );
};
