"use client";
import React, { useContext } from "react";
import Context from "../../context/Context";
import { redirect } from "next/navigation";
import PersonalDetailsForm from "./PersonalDetailsForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";

export const FormSection = () => {
  const { activeFormStep } = useContext(Context);
  const renderFormSection = () => {
    switch (activeFormStep) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <SummaryForm />;
      case 3:
        return <ExperienceForm />;
      case 4:
        return <ProjectsForm />;
      case 5:
        return <SkillsForm />;
      case 6:
        return <EducationForm />;
      case 7:
        return redirect("/view-resume");
      default:
        return <PersonalDetailsForm />;
    }
  };
  return <div>{renderFormSection()}</div>;
};
