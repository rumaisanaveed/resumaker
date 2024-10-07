import React, { useContext } from "react";
import { SectionHeading } from "./SectionHeading";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";

export const Education = () => {
  const { resumeData } = useContext(Context);
  const { education } = resumeData;
  return (
    <>
      {education && (
        <div className="w-full">
          <SectionHeading heading="Education" />
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="">
              <h1 className="font-semibold">{education?.universityName}</h1>
              <h2 className="col-span-2 italic">{education?.degreeName}</h2>
              <p className="font-semibold">
                CGPA : &nbsp;
                <span className="font-light">{education?.cgpa}</span>
              </p>
            </div>
            <div className="flex flex-col col-span-1 w-full text-left md:text-right">
              <h1 className="font-semibold">
                {education?.universityCity} - {education?.universityCountry}
              </h1>
              <h2 className="italic">
                {education?.startDate} - {education?.endDate}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
