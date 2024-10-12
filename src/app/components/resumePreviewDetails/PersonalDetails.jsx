import React, { useContext } from "react";
import { SectionHeading } from "./SectionHeading";
import Context from "@/app/context/Context";

export const PersonalDetails = () => {
  const { resumeData, resumeTitle } = useContext(Context);
  const { personalDetails } = resumeData;

  return (
    <>
      {personalDetails && (
        <>
          <div className="text-center">
            <SectionHeading heading={personalDetails?.username} />
            <h2 className="text-black font-semibold text-lg">{resumeTitle}</h2>
            <p className="text-lg font-medium">{personalDetails?.email}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:justify-between pt-3 pb-2">
            <h1>{personalDetails?.phone}</h1>
            <a href={personalDetails?.portfolioWebsite} target="blank">
              {personalDetails?.portfolioWebsite}
            </a>
          </div>
        </>
      )}
    </>
  );
};
