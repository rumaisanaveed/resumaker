import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    // if there's a stored value with the given key
    if (typeof window !== "undefined") {
      return localStorage.getItem(key) || null;
    }
    return null;
  });

  useEffect(() => {
    // if there's a stored value with the given key
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) setStoredValue(value);
    }
  }, [key]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
