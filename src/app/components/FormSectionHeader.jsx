"use client";
import React, { useContext } from "react";
import Button from "./buttons/Button";
import { BsHouseDoor } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import FormContext from "../context/FormContext";
import { FaArrowLeft } from "react-icons/fa";

export const FormSectionHeader = () => {
  const { activeFormStep, setActiveFormStep } = useContext(FormContext);

  const handleFormNextStep = () => {
    if (activeFormStep < 6) {
      setActiveFormStep((prevStep) => prevStep + 1);
    }
  };

  const handleFormPrevStep = () => {
    if (activeFormStep > 1) {
      setActiveFormStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button className="py-2 px-4">
          <BsHouseDoor style={{ fontSize: "25px" }} />
        </Button>
        <Button className="bg-white rounded border-gray-200 border shadow text-black flex items-center gap-1 py-2">
          <CiGrid41
            style={{
              color: "black",
            }}
          />
          <p className="text-black">Theme</p>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        {activeFormStep > 1 && (
          <Button className="py-3 px-4" onClick={handleFormPrevStep}>
            <FaArrowLeft style={{ fontSize: "23px" }} />
          </Button>
        )}
        <Button
          className="flex items-center gap-2"
          onClick={handleFormNextStep}
          type="button"
        >
          <p>Next</p>
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};
