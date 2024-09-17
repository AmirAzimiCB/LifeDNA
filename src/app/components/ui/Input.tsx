import React from "react";

export const Input = ({ type, placeholder, className }) => {
  const baseStyles =
    "px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300";

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseStyles} ${className}`}
    />
  );
};
