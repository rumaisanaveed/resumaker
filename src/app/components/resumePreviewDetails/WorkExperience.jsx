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
        <div>
          <p>
            {dummy.experience.jobTitle} - {dummy.experience.companyName}
          </p>
          <p>{dummy.experience.duration}</p>
        </div>
        <div>{dummy.experience.description}</div>
      </div>
    </div>
  );
};
