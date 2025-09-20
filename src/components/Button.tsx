import React from "react";

const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-full bg-primary-900 py-3 rounded-lg text-base text-white-100 hover:bg-[#4D3EAA]"
    >
      {label}
    </button>
  );
};

export default Button;
