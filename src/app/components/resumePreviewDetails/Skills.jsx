import React, { useContext, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";
import { formatArray } from "@/app/utils/formatArray";

export const Skills = () => {
  const { resumeData } = useContext(Context);
  const { skills } = resumeData;
  const programmingSkills = formatArray(skills?.programming);
  const tools = formatArray(skills?.toolsAndPlatforms);

  useEffect(() => {
    console.log("Skills", programmingSkills);
    console.log("Tools", tools);
  }, [programmingSkills, tools]);

  return (
    <>
      {skills && (
        <>
          <SectionHeading heading="Skills" />
          <Separator />
          <>
            <p className="font-semibold">
              Programming : &nbsp;
              <span className="font-light">{programmingSkills}</span>
            </p>
            <p className="font-semibold">
              Tools : &nbsp; <span className="font-light">{tools}</span>
            </p>
          </>
        </>
      )}
    </>
  );
};
