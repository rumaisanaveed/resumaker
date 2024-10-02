"use client";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useContext, useState } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input, DatePicker } from "antd";
import Button from "../buttons/Button";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { RichTextEditor } from "../RichTextEditor";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import useLocalStorage from "@/app/hooks/useLocalStorage";

const ExperienceForm = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [resumeId, setResumeId] = useLocalStorage("resumeId");

  const onChange = (content) => {
    setSummary(content);
  };

  const handleExperienceSave = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      if (!resumeId || !user.id) {
        console.error("resumeId or userId is missing");
        setLoading(false);
        return;
      }
      const { startDate, endDate, ...otherValues } = values;
      const formattedStartDate = startDate
        ? startDate.format("YYYY-MM-DD")
        : null;
      const formattedEndDate = endDate ? endDate.format("YYYY-MM-DD") : null;
      const ref = doc(db, "users", user.id, "resumes", resumeId);
      const dataToSave = {
        ...otherValues,
        experienceSummary: summary,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      };
      await setDoc(ref, dataToSave, { merge: true });
      console.log("Experience section data saved successfully!");
      setLoading(false);
    } catch (error) {
      console.error("Error saving experience form data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Professional Experience"
        description="Add your previous job experience"
      />
      <Form
        className="rm-form grid gap-x-3 gap-y-0 grid-cols-2"
        layout="vertical"
        name="experience-form"
        onFinish={handleExperienceSave}
      >
        <Form.Item
          label="Position Title"
          name="positionTitle"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input position title!" }]}
        >
          <Input className="py-2" />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="companyName"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input company name!" }]}
        >
          <Input className="py-2" />
        </Form.Item>
        <Form.Item
          label="Start Date"
          className="col-span-2 lg:col-span-1"
          name="startDate"
          rules={[{ required: true, message: "Please input start date!" }]}
        >
          <DatePicker className="w-full py-2" />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input end date!" }]}
        >
          <DatePicker className="w-full py-2" />
        </Form.Item>
        <Form.Item
          label="Summary"
          name="jobSummary"
          className="col-span-2"
          rules={[
            {
              required: true,
              message: "Please input summary!",
            },
          ]}
        >
          <RichTextEditor value={summary} onChange={onChange} />
        </Form.Item>
        <div className={globalStyles.footerBtnsContainer}>
          <div className={globalStyles.footerBtnsColOne}>
            <Button className={globalStyles.footerBtnsStyles}>
              <IoAddOutline style={globalStyles.footerBtnIconStyles} />
              <p
                className="text-custom-purple"
                style={globalStyles.footerBtnTextStyles}
              >
                Add More Experience
              </p>
            </Button>
            <Button className={globalStyles.footerBtnsStyles}>
              <FiMinus
                style={{
                  color: "#A133FF",
                  fontWeight: "500",
                }}
              />
              <p
                className="text-custom-purple"
                style={globalStyles.footerBtnTextStyles}
              >
                Remove
              </p>
            </Button>
          </div>
          <div className="col-span-1">
            <Button className="px-6" type="primary">
              {loading ? <CgSpinner style={{ color: "white" }} /> : <p>Save</p>}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ExperienceForm;
