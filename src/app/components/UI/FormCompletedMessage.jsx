import React from "react";

export const FormCompletedMessage = () => {
  return (
    <div className="flex items-center justify-center text-left flex-col h-[70vh]">
      <h1 className="font-medium text-black text-2xl">
        Success! Your Form submission is completed...
      </h1>
      <h2>Wait, while we&apos;re navigating you to download your resume!</h2>
    </div>
  );
};
