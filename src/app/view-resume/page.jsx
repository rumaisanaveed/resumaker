"use client";
import React, { useState, useContext } from "react";
import MainLayout from "../layouts/MainLayout";
import { ResumePreview } from "../components/ResumePreview";
import ProtectedLayout from "../components/routes/ProtectedRoute";
import Button from "../components/buttons/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { saveToFirestore } from "../utils/apiHandler";
import Context from "../context/Context";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Page() {
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const { setIsFormSubmitted, resumeTitle, setActiveFormStep, resumeData } =
    useContext(Context);
  const [resumeId, setResumeId] = useLocalStorage("resumeId");

  const handleGeneratePdf = async () => {
    if (Object.keys(resumeData).length !== 0) {
      const capture = document.querySelector(".resume");
      setLoader(true);
      try {
        const canvas = await html2canvas(capture);
        const imageData = canvas.toDataURL("image/png");
        // Save the image to Firestore
        await saveToFirestore(
          ["users", user.id, "resumes", resumeId],
          {
            resumeImage: imageData,
          },
          setIsFormSubmitted
        );
        // Generate PDF
        const doc = new jsPDF("p", "mm", "a4");
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imageData, "PNG", 0, 0, componentWidth, componentHeight);
        doc.save(`${resumeTitle}.pdf`);
        setActiveFormStep(1);
      } catch (error) {
        console.error("Error generating PDF and saving image:", error);
        toast.error("An error occurred while generating the resume.");
      } finally {
        setLoader(false);
      }
    } else {
      toast.error(
        "Resume data is empty. Please fill in the details before generating."
      );
    }
  };

  return (
    <ProtectedLayout>
      <MainLayout>
        <ResponsiveWrapper>
          <div className="xl:max-w-5xl lg:max-w-3xl mx-auto mt-12 px-6 text-center">
            <h1 className="text-black font-semibold text-3xl pt-5 pb-3">
              Congrats! Your resume is ready!
            </h1>
            <p className="text-gray-500 font-light max-w-md mx-auto xl:max-w-full">
              Now you are ready to download your resume and you can share it
              with your employers.
            </p>
            <div className="pt-9">
              <Button onClick={() => handleGeneratePdf()} disabled={loader}>
                {loader ? <span>Downloading...</span> : <span>Download</span>}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center pb-12 pt-4 w-full px-6 sm:px-10">
            <div className="my-12">
              <ResumePreview
                additionalClasses="md:w-4/5 mx-auto"
                additionalStyles={{ width: "210mm", height: "305mm" }}
              />
            </div>
          </div>
        </ResponsiveWrapper>
      </MainLayout>
    </ProtectedLayout>
  );
}
