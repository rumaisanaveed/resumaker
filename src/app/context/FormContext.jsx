import { createContext, useState } from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [activeFormStep, setActiveFormStep] = useState(1);
  return (
    <FormContext.Provider
      value={{
        activeFormStep,
        setActiveFormStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
