import React from "react";
import ProtectedLayout from "../components/routes/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import AddResume from "../components/AddResume";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";
import { Resumes } from "../components/Resumes";

export const metadata = {
  title: "Dashboard - ResuMaker",
  description:
    "Welcome to your ResuMaker dashboard! Here, you can manage your resume drafts, access personalized templates, and track your resume-building progress. Seamlessly navigate through your projects, make updates, and stay organized as you create standout resumes with ease.",
};

export default function Page() {
  return (
    <ProtectedLayout>
      <MainLayout>
        <ResponsiveWrapper>
          <div className="min-h-screen w-full">
            <div className="md:py-12 md:px-20 px-10 py-10">
              <h1 className="text-black font-bold md:text-3xl text-xl">
                Create Now
              </h1>
              <p className="text-custom-gray pt-2">
                Start creating the resume for your next job right now!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 md:mt-3 gap-5 w-3/4 sm:w-full mx-auto sm:mx-0">
                <AddResume />
                <Resumes />
              </div>
            </div>
          </div>
        </ResponsiveWrapper>
      </MainLayout>
    </ProtectedLayout>
  );
}
