"use client";
import React, { useContext } from "react";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { SummaryForm } from "./SummaryForm";
import { ExperienceForm } from "./ExperienceForm";
import { SkillsForm } from "./SkillsForm";
import { EducationForm } from "./EducationForm";
import FormContext from "../../context/FormContext";
import { ProjectsForm } from "./ProjectsForm";

export const FormSection = () => {
  const { activeFormStep } = useContext(FormContext);
  return (
    <div>
      {activeFormStep === 1 && <PersonalDetailsForm />}
      {activeFormStep === 2 && <SummaryForm />}
      {activeFormStep === 3 && <ExperienceForm />}
      {activeFormStep === 4 && <ProjectsForm />}
      {activeFormStep === 5 && <SkillsForm />}
      {activeFormStep === 6 && <EducationForm />}
    </div>
  );
};
