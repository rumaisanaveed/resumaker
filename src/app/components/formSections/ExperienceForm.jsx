"use client";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useContext, useState } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input, DatePicker } from "antd";
import Button from "../buttons/Button";
import { RichTextEditor } from "../RichTextEditor";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import Context from "@/app/context/Context";
import { handleSave, withLoading } from "@/app/utils/apiHandler";
import { formatDate } from "@/app/utils/formatDate";

const ExperienceForm = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [resumeId, setResumeId] = useLocalStorage("resumeId");
  const { setIsFormSubmitted, setResumeData } = useContext(Context);

  const onChange = (content) => {
    setSummary(content);
  };

  const handleExperienceSave = (values) => {
    const formattedStartDate = formatDate(values.startDate);
    const formattedEndDate = formatDate(values.endDate);
    setResumeData((prev) => ({
      ...prev,
      experienceData: {
        ...values,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      },
    }));
    withLoading(
      () =>
        handleSave(
          values,
          "experienceDetails",
          {
            startDate: values.startDate,
            endDate: values.endDate,
          },
          resumeId,
          user.id,
          setIsFormSubmitted
        ),
      setLoading
    );
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
