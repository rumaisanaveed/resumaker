import React, { useContext } from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";
import styleLists from "@/app/utils/styleLists";

export const WorkExperience = () => {
  const { resumeData } = useContext(Context);
  const { experienceData } = resumeData;

  const formattedSummary = experienceData?.jobSummary
    ? styleLists(experienceData?.jobSummary)
    : "";

  return (
    <>
      {experienceData && (
        <div>
          <SectionHeading heading={"Work Experience"} />
          <Separator />
          <div>
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-between font-semibold">
              <p>
                {experienceData?.positionTitle} - {experienceData?.companyName}
              </p>
              <p>
                {experienceData?.startDate} - {experienceData?.endDate}
              </p>
            </div>
            <div
              className="pt-2"
              dangerouslySetInnerHTML={{ __html: formattedSummary }}
            />
          </div>
        </div>
      )}
    </>
  );
};
