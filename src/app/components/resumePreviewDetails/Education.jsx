import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import dummy from "@/app/data/dummy";

export const Education = () => {
  return (
    <div className="w-full">
      <SectionHeading heading="Education" />
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="">
          <h1 className="font-semibold">{dummy.education.universityName}</h1>
          <h2 className="col-span-2 italic">{dummy.education.degree}</h2>
          <p className="font-semibold">
            CGPA : &nbsp;
            <span className="font-light">{dummy.education.cgpa}</span>
          </p>
        </div>
        <div className="flex flex-col col-span-1 w-full text-left md:text-right">
          <h1 className="font-semibold">{dummy.education.location}</h1>
          <h2 className="italic">{dummy.education.duration}</h2>
        </div>
      </div>
    </div>
  );
};
