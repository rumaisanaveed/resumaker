import React from "react";
import { SignUp } from "@clerk/nextjs";
import { variables } from "@/app/styles/cssInJsStyles/constantStyles";
import dynamic from "next/dynamic";

const SignUp = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignUp),
  { ssr: false }
);

export default function Page() {
  const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL;

  return (
    <div className="min-h-screen max-w-md mx-auto flex flex-col items-center justify-center px-10 md:px-0">
      <SignUp
        signInUrl={signInUrl}
        appearance={{
          variables,
        }}
      />
    </div>
  );
}
