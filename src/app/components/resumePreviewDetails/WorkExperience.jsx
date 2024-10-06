import React, { useContext, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";

export const WorkExperience = () => {
  const { resumeData } = useContext(Context);
  const { experienceData } = resumeData;

  useEffect(() => {
    console.log(experienceData?.jobSummary);
  }, [experienceData?.jobSummary]);

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
              dangerouslySetInnerHTML={{ __html: experienceData?.jobSummary }}
            />
          </div>
        </div>
      )}
    </>
  );
};
