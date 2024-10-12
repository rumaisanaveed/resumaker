import React, { useContext, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";
import { formatArray } from "@/app/utils/formatArray";
import styleLists from "@/app/utils/styleLists";

export const Projects = () => {
  const { resumeData } = useContext(Context);
  const { projectDetails } = resumeData;
  const formattedTechStack = formatArray(projectDetails?.techStack);
  const formattedDescrition = projectDetails?.description
    ? styleLists(projectDetails?.description)
    : "";

  return (
    <>
      {projectDetails && (
        <div>
          <SectionHeading heading="Projects" />
          <Separator />
          <div>
            <div className="font-semibold flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between">
              <h1>{projectDetails?.name}</h1>
              <p>
                {projectDetails?.startDate} - {projectDetails?.endDate}
              </p>
            </div>
            <div className="font-semibold flex md:items-center gap-1 flex-col md:flex-row items-start justify-start">
              <span>Tech Stack :</span>
              <span className="font-light">{formattedTechStack}</span>
            </div>
            <div className="font-semibold flex md:items-center gap-1 flex-col md:flex-row items-start justify-start">
              <span>Live Demo :</span>
              <a
                target="blank"
                className="font-light"
                href={projectDetails?.liveLink}
              >
                {projectDetails?.liveLink}
              </a>
            </div>
          </div>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: formattedDescrition }}
          />
        </div>
      )}
    </>
  );
};
