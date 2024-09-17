"use client";
import React, { useState, useEffect } from "react";
import { Cherry_Swash } from "next/font/google";
import { UserButton, useUser } from "@clerk/nextjs";
import CustomLink from "../buttons/CustomLink";
import Link from "next/link";

const cherrySwash = Cherry_Swash({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-5 px-7 flex items-center justify-between shadow sticky z-50 top-0 transition-all duration-300 ${
        isScrolled ? "blur-bg" : ""
      }`}
    >
      <Link
        href="/"
        className={`${cherrySwash.className} text-custom-purple font-extrabold text-xl md:text-3xl`}
      >
        ResuMaker
      </Link>
      <div className="flex items-center gap-3 flex-row-reverse">
        {isSignedIn ? (
          <>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-9 h-9",
                },
              }}
            />
          </>
        ) : (
          <CustomLink
            className="bg-custom-purple text-white font-light text-sm px-5 py-3"
            href="/auth/sign-up"
          >
            Sign up
          </CustomLink>
        )}
        {isSignedIn && (
          <>
            <Link
              className="border-black text-sm border px-3 py-2 rounded hover:bg-black hover:text-white"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
