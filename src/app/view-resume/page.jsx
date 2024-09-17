"use client";
import React, { useState, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import { ResumePreview } from "../components/ResumePreview";
import ProtectedLayout from "../components/routes/ProtectedRoute";
import Button from "../components/buttons/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";

export default function Page() {
  const [loader, setLoader] = useState(false);

  const handleGeneratePdf = () => {
    const capture = document.querySelector(".resume");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imageData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("resume.pdf");
    });
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
