"use client";
import React, { useContext } from "react";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { SummaryForm } from "./SummaryForm";
import { ExperienceForm } from "./ExperienceForm";
import { SkillsForm } from "./SkillsForm";
import { EducationForm } from "./EducationForm";
import FormContext from "../../context/FormContext";

export const FormSection = () => {
  const { activeFormStep } = useContext(FormContext);
  return (
    <div>
      {activeFormStep === 1 && <PersonalDetailsForm />}
      {activeFormStep === 2 && <SummaryForm />}
      {activeFormStep === 3 && <ExperienceForm />}
      {activeFormStep === 4 && <SkillsForm />}
      {activeFormStep === 5 && <EducationForm />}
    </div>
  );
};
