import React from "react";

export const ActiveFormHeader = ({ title, description }) => {
  return (
    <div className="py-3">
      <h1 className="text-black text-xl font-semibold">{title}</h1>
      <h2 className="text-gray-600 text-sm font-light pt-1">{description}</h2>
    </div>
  );
};
