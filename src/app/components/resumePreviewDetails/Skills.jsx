import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import dummy from "@/app/data/dummy";

export const Skills = () => {
  return (
    <>
      <SectionHeading heading="Skills" />
      <Separator />
      <>
        <p className="font-semibold">
          Programming : &nbsp;
          <span className="font-light">{dummy.skills.programming}</span>
        </p>
        <p className="font-semibold">
          Tools : &nbsp;{" "}
          <span className="font-light">{dummy.skills.tools}</span>
        </p>
      </>
    </>
  );
};
