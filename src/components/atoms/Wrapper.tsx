import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WrapperProps {
  className?: string;
  children: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  const baseStyles =
    "rounded-[16px] p-8 bg-[#FCFCFC] shadow-[0px_0px_19.1px_0px_rgba(0,_0,_0,_0.1)]";

  return <div className={cn(baseStyles, className)}>{children}</div>;
};
