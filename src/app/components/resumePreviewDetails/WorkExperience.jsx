import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import dummy from "@/app/data/dummy";

export const WorkExperience = () => {
  return (
    <div>
      <SectionHeading heading={"Work Experience"} />
      <Separator />
      <div>
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-between font-semibold">
          <p>
            {dummy.experience.jobTitle} - {dummy.experience.companyName}
          </p>
          <p>{dummy.experience.duration}</p>
        </div>
        <div className="pt-2">
          <p>{dummy.experience.description.point1}</p>
          <p>{dummy.experience.description.point2}</p>
          <p>{dummy.experience.description.point3}</p>
        </div>
      </div>
    </div>
  );
};
