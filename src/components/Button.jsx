import React from "react";

const Button = React.memo(({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
});

export default Button;
