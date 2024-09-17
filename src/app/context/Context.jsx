"use client";
import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [activeFormStep, setActiveFormStep] = useState(1);
  const [themeColor, setThemeColor] = useState("#aa16ff");
  return (
    <Context.Provider
      value={{
        activeFormStep,
        setActiveFormStep,
        themeColor,
        setThemeColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
