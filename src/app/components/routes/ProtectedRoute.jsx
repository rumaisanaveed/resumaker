"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      redirect("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded || !isSignedIn) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}
