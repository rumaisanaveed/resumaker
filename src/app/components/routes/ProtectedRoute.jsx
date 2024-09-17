"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useScreenSize } from "@/app/hooks/useScreenSize";
import { ViewOnDesktopMessage } from "../ViewOnDesktopMessage";

export default function ProtectedLayout({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  const { isDesktop } = useScreenSize();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      redirect("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (!isDesktop) {
    return <ViewOnDesktopMessage />;
  }

  return <>{children}</>;
}
