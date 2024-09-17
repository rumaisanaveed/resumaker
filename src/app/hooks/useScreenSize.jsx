import { useEffect, useState } from "react";

// Debounce function to delay execution
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function useScreenSize() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Define the resize handler with debounce
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 200); // Adjust the debounce delay as needed

    // Set initial window width on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  return { isMobile, isTablet, isDesktop };
}
