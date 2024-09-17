"use client";
import Context from "@/app/context/Context";
import React, { useContext } from "react";

export const SectionHeading = ({ heading }) => {
  const { themeColor } = useContext(Context);
  return (
    <h1
      className="font-semibold py-3 text-xl text-center"
      style={{ color: themeColor }}
    >
      {heading}
    </h1>
  );
};
