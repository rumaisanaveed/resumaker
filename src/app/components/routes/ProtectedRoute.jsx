"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function ProtectedLayout({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      redirect("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <>{children}</>;
}
