import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  variant?: "default" | "smaller" | "medium";
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  variant = "default",
  type = "h2",
  className,
  children,
}) => {
  const baseStyles = "font-semibold capitalize text-[#383B42]";
  const variantStyles = {
    default: "text-[32px] leading-[48px]",
    smaller: "text-[14px] leading-[120%]",
    medium: "text-[16px] leading-[150%]",
  };

  const Component = type;

  return (
    <Component className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Component>
  );
};