import React from "react";

export function Button({ children, variant = "default", asChild, ...props }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-300";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const Component = asChild ? "span" : "button";

  return (
    <Component className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </Component>
  );
}
