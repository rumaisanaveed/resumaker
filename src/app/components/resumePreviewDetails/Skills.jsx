import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import dummy from "@/app/data/dummy";

export const Skills = () => {
  return (
    <div>
      <SectionHeading heading="Skills" />
      <Separator />
      <div>
        <p>Programming : {dummy.skills.programming}</p>
        <p>Tools : {dummy.skills.tools}</p>
      </div>
    </div>
  );
};
