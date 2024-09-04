"use client";

import { FormContextProvider } from "./context/FormContext";

export function Providers({ children }) {
  return <FormContextProvider>{children}</FormContextProvider>;
}
