"use client";
import React, { useState, useEffect } from "react";
import { ViewOnDesktopMessage } from "./ViewOnDesktopMessage";

export const ResponsiveWrapper = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Show the message on small screens */}
      <div className="lg:hidden">
        <ViewOnDesktopMessage />
      </div>

      {/* Show the content or spinner on large screens */}
      <div className="lg:block">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>{children}</> // Display content once loading is done
        )}
      </div>
    </>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-120px)] bg-white fixed top-[60px] left-0 right-0 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-custom-purple border-solid border-t-custom-purple border-b-transparent"></div>
    </div>
  );
};
