"use client";
import React from "react";
import backToTop from "../../assets/back-to-top.svg";
import Image from "next/image";
import { Cherry_Swash } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const cherrySwash = Cherry_Swash({
  weight: "400",
  subsets: ["latin"],
});

const SocialIcons = [
  {
    id: 1,
    icon: <FaInstagram />,
  },
  {
    id: 2,
    icon: <FaFacebook />,
  },
  {
    id: 3,
    icon: <FaTwitter />,
  },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 px-20">
      <div className="pb-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <h1 className={`text-custom-purple text-3xl ${cherrySwash.className}`}>
          ResuMaker
        </h1>
        <div className="flex items-center gap-3 text-2xl">
          {SocialIcons.map((socialIcon) => (
            <div
              key={socialIcon.id}
              className="hover:text-custom-purple cursor-pointer"
            >
              {socialIcon.icon}
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="px-20" style={{ color: "#000000" }} />
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-center gap-3">
          <p>© 2024 ResuMaker. All rights reserved.</p>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleScrollToTop}
          >
            <p className="text-black font-semibold text-xs hover:text-purple">
              BACK TO TOP
            </p>
            <Image src={backToTop} alt="up-arrow"></Image>
          </div>
        </div>
      </div>
    </footer>
  );
}
