import dummy from "@/app/data/dummy";
import React from "react";
import { SectionHeading } from "./SectionHeading";

export const PersonalDetails = () => {
  return (
    <>
      <div className="text-center">
        <SectionHeading heading={dummy.personalDetails.name} />
        <h2 className="text-black font-semibold text-lg">
          {dummy.personalDetails.title}
        </h2>
        <p className="text-lg font-medium">{dummy.personalDetails.email}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:justify-between pt-3 pb-2">
        <h1>{dummy.personalDetails.phone}</h1>
        <a href={dummy.personalDetails.portfolio} target="blank">
          {dummy.personalDetails.portfolio}
        </a>
      </div>
    </>
  );
};
