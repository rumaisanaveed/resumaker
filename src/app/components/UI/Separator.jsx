"use client";
import Context from "@/app/context/Context";
import React, { useContext } from "react";

export const Separator = () => {
  const { themeColor } = useContext(Context);
  return (
    <div
      className="border-t-[3.5px] pb-3"
      style={{
        borderColor: themeColor,
      }}
    />
  );
};
