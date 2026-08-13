import React from "react";

function Button({ text, onClick, variant = "primary" }) {
  let variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-medium transition duration-200 ${variants[variant]}`}
    >
      {text}
    </button>
  );
}

export default Button;
