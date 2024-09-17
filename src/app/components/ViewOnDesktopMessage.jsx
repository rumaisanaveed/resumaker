import React from "react";
import MainLayout from "../layouts/MainLayout";

export const ViewOnDesktopMessage = () => {
  return (
    <MainLayout>
      <div className="bg-white text-custom-purple flex items-center justify-center flex-col text-center min-h-screen max-w-md mx-auto px-8">
        <h1 className="text-black font-semibold text-2xl pb-4">
          Restricted Access
        </h1>
        <p className="text-gray-500 font-light text-lg">
          Access to this page is not available on mobile devices. Please use a
          desktop device to view this content.
        </p>
      </div>
    </MainLayout>
  );
};
