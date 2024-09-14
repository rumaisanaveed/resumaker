import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import dummy from "@/app/data/dummy";

export const Education = () => {
  return (
    <div>
      <SectionHeading heading="Education" />
      <Separator />
      <div>
        <div>
          <h1>{dummy.education.universityName}</h1>
          <h2>{dummy.education.degree}</h2>
          <p>CGPA : {dummy.education.cgpa}</p>
        </div>
        <div>
          <h1>{dummy.education.location}</h1>
          <h2>{dummy.education.duration}</h2>
        </div>
      </div>
    </div>
  );
};
