import { variables } from "@/app/styles/cssInJsStyles/constantStyles";
import dynamic from "next/dynamic";
import React from "react";

const SignIn = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignIn),
  { ssr: false }
);

export default function Page() {
  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;
  return (
    <div className="min-h-screen max-w-md mx-auto flex flex-col items-center justify-center px-10 md:px-0">
      <SignIn
        signUpUrl={signUpUrl}
        appearance={{
          variables,
        }}
      />
    </div>
  );
}
