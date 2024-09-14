import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import dummy from "@/app/data/dummy";

export const Projects = () => {
  return (
    <div>
      <SectionHeading heading="Projects" />
      <Separator />
      <div>
        <div>
          <h1>{dummy.projects.name}</h1>
          <p>{dummy.projects.duration}</p>
        </div>
        <p>Tech Stack : {dummy.projects.techStack}</p>
        <p>Live Demo : {dummy.projects.liveLink}</p>
        <p>GitHub Link : {dummy.projects.githubLink}</p>
      </div>
      <div>{dummy.projects.description}</div>
    </div>
  );
};
