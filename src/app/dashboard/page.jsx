import React from "react";
import ProtectedLayout from "../components/routes/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import AddResume from "../components/AddResume";
import { Dropdown } from "antd";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";
import Link from "next/link";

export const metadata = {
  title: "Dashboard - ResuMaker",
  description:
    "Welcome to your ResuMaker dashboard! Here, you can manage your resume drafts, access personalized templates, and track your resume-building progress. Seamlessly navigate through your projects, make updates, and stay organized as you create standout resumes with ease.",
};

export default function Page() {
  const items = [
    {
      key: "1",
      label: <Link href="/view-resume">Edit</Link>,
    },
    {
      key: "2",
      label: <Link href="/view-resume">View</Link>,
    },
    {
      key: "3",
      label: <Link href="/view-resume">Download</Link>,
    },
    {
      key: "4",
      label: <Link href="/view-resume">Delete</Link>,
    },
  ];
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
                {Array.from({ length: 5 }, () => (
                  <div className="relative shadow pt-2 flex items-center justify-center transition-all rounded-lg h-[350px] md:h-[300px] border-dashed">
                    <div className="resume-bg-image" />
                    <div className="absolute bottom-0 pl-3 left-0 h-10 w-full bg-gray-100 rounded-b-lg flex items-center justify-between">
                      <p className="text-sm text-black">Frontend Developer</p>
                      <Dropdown
                        menu={{
                          items,
                        }}
                        placement="bottomRight"
                      >
                        <PiDotsThreeVerticalLight
                          style={{
                            fontSize: "25px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        />
                      </Dropdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResponsiveWrapper>
      </MainLayout>
    </ProtectedLayout>
  );
}
