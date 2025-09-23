import React, { useState } from "react";

export default function Toggle() {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300
        ${active ? "bg-primary-900" : "bg-secondary-900"}
      `}
    >
      <div
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white-100 transition-transform duration-300 ease-in-out
          ${active ? "translate-x-8" : "translate-x-0"}`}
      />
    </div>
  );
}
