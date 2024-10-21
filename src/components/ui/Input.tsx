import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300";

    return (
      <input ref={ref} className={`${baseStyles} ${className}`} {...props} />
    );
  }
);

Input.displayName = "Input";
