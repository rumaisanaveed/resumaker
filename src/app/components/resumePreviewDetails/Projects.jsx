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
        <div className="font-semibold flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between">
          <h1>{dummy.projects.name}</h1>
          <p>{dummy.projects.duration}</p>
        </div>

        <div className="font-semibold flex md:items-center gap-1 flex-col md:flex-row items-start justify-start">
          <span>Tech Stack :</span>
          <span className="font-light">{dummy.projects.techStack}</span>
        </div>

        <div className="font-semibold flex md:items-center gap-1 flex-col md:flex-row items-start justify-start">
          <span>Live Demo :</span>
          <a
            target="blank"
            className="font-light"
            href={dummy.projects.liveLink}
          >
            {dummy.projects.liveLink}
          </a>
        </div>
      </div>

      <div className="mt-2">
        <p>{dummy.projects.description.point1}</p>
        <p>{dummy.projects.description.point2}</p>
        <p>{dummy.projects.description.point3}</p>
      </div>
    </div>
  );
};
