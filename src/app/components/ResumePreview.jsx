import React from "react";
import { PersonalDetails } from "./resumePreviewDetails/PersonalDetails";
import { WorkExperience } from "./resumePreviewDetails/WorkExperience";
import { Summary } from "./resumePreviewDetails/Summary";
import { Projects } from "./resumePreviewDetails/Projects";
import { Skills } from "./resumePreviewDetails/Skills";
import { Education } from "./resumePreviewDetails/Education";

export const ResumePreview = () => {
  return (
    <div className="bg-white w-full shadow-md rounded md:w-3/4 py-6 px-9 border border-gray-100">
      <PersonalDetails />
      <Summary />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
};
