"use client";
import React from "react";
import { PersonalDetails } from "./resumePreviewDetails/PersonalDetails";
import { WorkExperience } from "./resumePreviewDetails/WorkExperience";
import { Summary } from "./resumePreviewDetails/Summary";
import { Projects } from "./resumePreviewDetails/Projects";
import { Skills } from "./resumePreviewDetails/Skills";
import { Education } from "./resumePreviewDetails/Education";

export const ResumePreview = ({ additionalClasses, additionalStyles }) => {
  // Determine the base classes and conditional classes
  const baseClasses =
    "bg-white w-full shadow-md rounded py-6 px-9 resume border border-gray-100";
  const conditionalClasses = additionalClasses
    ? `${additionalClasses} ${baseClasses}`
    : `${baseClasses} md:w-3/4`;

  return (
    <div className={conditionalClasses} style={additionalStyles}>
      <PersonalDetails />
      <Summary />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
};
