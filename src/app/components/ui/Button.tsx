import React from "react";

export const Button = ({ variant, className, children }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none focus:ring-2";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};
