import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  variant?: "default" | "light";
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  className,
  children,
}) => {
  const baseStyles =
    "rounded-[12px] p-5 shadow-[0px_0px_3.1px_0px_rgba(0,_0,_0,_0.22)]";
  const variantStyles = {
    default: "bg-white",
    light: "bg-[#FBFBFB] rounded-[16px]",
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </div>
  );
};
