import React from "react";
import ProtectedLayout from "../components/routes/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import { FormSectionHeader } from "../components/FormSectionHeader";
import { ResumePreview } from "../components/ResumePreview";
import { FormSection } from "../components/formSections/FormSection";

export const metadata = {
  title: "Create Resume - ResuMaker",
  description:
    "Start building your professional resume with ResuMaker's intuitive resume creation tool. Choose from customizable themes, input your personal details, and design a resume that highlights your skills and experiences. Enjoy a user-friendly interface and powerful features to craft a resume that stands out to employers.",
};

export default function Page() {
  return (
    <ProtectedLayout>
      <MainLayout>
        <div className="w-full p-8 xl:px-20 lg:py-12 flex flex-col gap-9 md:items-center md:justify-center lg:items-start lg:flex-row lg:justify-between lg:gap-5">
          <div className="w-full md:w-3/4">
            {/* handle the form step in the context */}
            <FormSectionHeader />
            {/* render the active form component */}
            <FormSection />
          </div>
          {/* render the active component */}
          <ResumePreview />
        </div>
      </MainLayout>
    </ProtectedLayout>
  );
}
