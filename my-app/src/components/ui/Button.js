import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white bg-cyan-500 rounded hover:bg-cyan-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
