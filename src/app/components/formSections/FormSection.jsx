"use client";
import React, { useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { saveToFirestore } from "../../utils/apiHandler";
import PersonalDetailsForm from "./PersonalDetailsForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import { FormCompletedMessage } from "../UI/FormCompletedMessage";
import Context from "@/app/context/Context";

export const FormSection = () => {
  const router = useRouter();
  const { user } = useUser();
  const { activeFormStep, resumeId, themeColor, setIsFormSubmitted } =
    useContext(Context);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await saveToFirestore(
        ["users", user.id, "resumes", resumeId],
        { color: themeColor },
        setIsFormSubmitted
      );
    } catch (error) {
      console.error("Error saving to Firestore:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (activeFormStep === 7) {
      handleSubmit();
    }
  }, [activeFormStep]);

  // use useeffect is getting next router was not mounted
  useEffect(() => {
    // Redirect if form submission is done
    if (!isSubmitting && activeFormStep === 7) {
      router.push("/view-resume");
    }
  }, [isSubmitting, activeFormStep, router]);

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
        return <FormCompletedMessage />;
      default:
        return <PersonalDetailsForm />;
    }
  };

  return <div>{renderFormSection()}</div>;
};
