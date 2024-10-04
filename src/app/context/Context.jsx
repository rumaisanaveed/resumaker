"use client";
import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [activeFormStep, setActiveFormStep] = useState(1);
  const [themeColor, setThemeColor] = useState("#aa16ff");
  const [resumeId, setResumeId] = useState("");
  const [resumeTitle, setResumeTitle] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <Context.Provider
      value={{
        activeFormStep,
        setActiveFormStep,
        themeColor,
        setThemeColor,
        resumeId,
        setResumeId,
        resumeTitle,
        setResumeTitle,
        isFormSubmitted,
        setIsFormSubmitted,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
