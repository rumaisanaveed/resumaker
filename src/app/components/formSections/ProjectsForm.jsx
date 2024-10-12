"use client";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useState, useContext } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input, DatePicker, Select } from "antd";
import Button from "../buttons/Button";
import { RichTextEditor } from "../RichTextEditor";
import { CgSpinner } from "react-icons/cg";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useUser } from "@clerk/nextjs";
import Context from "@/app/context/Context";
import { handleSave, withLoading } from "@/app/utils/apiHandler";
import { formatDate } from "@/app/utils/formatDate";

const ProjectsForm = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [resumeId, setResumeId] = useLocalStorage("resumeId");
  const { setIsFormSubmitted, setResumeData } = useContext(Context);

  const onChange = (content) => {
    setDescription(content);
  };

  const handleProjectsSave = (values) => {
    const formattedStartDate = formatDate(values.projectStartDate);
    const formattedEndDate = formatDate(values.projectEndDate);
    setResumeData((prev) => ({
      ...prev,
      projectDetails: {
        ...values,
        techStack: [...values.techStack],
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      },
    }));
    withLoading(
      () =>
        handleSave(
          values,
          "projectDetails",
          {
            projectStartDate: values.projectStartDate,
            projectEndDate: values.projectEndDate,
          },
          resumeId,
          user.id,
          setIsFormSubmitted
        ),
      setLoading
    );
  };

  const techOptions = [
    { value: "React.js" },
    { value: "React Native" },
    { value: "Express.js" },
    { value: "Next.js" },
    { value: "Html5" },
    { value: "CSS3" },
    { value: "Framer motion" },
    { value: "GSAP" },
    { value: "Node.js" },
    { value: "MongoDB" },
    { value: "TypeScript" },
  ];

  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Projects Details"
        description="Add your projects to stand out from others"
      />
      <Form
        className="rm-form grid gap-x-3 gap-y-0 grid-cols-2"
        layout="vertical"
        name="projects-form"
        onFinish={handleProjectsSave}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input position title!" }]}
        >
          <Input className="py-2" placeholder="e.g; Emoji Vault" />
        </Form.Item>
        <Form.Item
          label="Tech Stack"
          name="techStack"
          className="col-span-2 lg:col-span-1 rm-multi-select"
          rules={[{ required: true, message: "Please input tech stack!" }]}
        >
          <Select
            mode="tags"
            dropdownStyle={{ overflowY: "auto" }}
            className="w-full"
            maxTagCount={2}
            style={{ width: "100%" }}
            placeholder="Select or add tech stack..."
            options={techOptions}
          />
        </Form.Item>
        <Form.Item
          label="Live Link"
          className="col-span-2 lg:col-span-1"
          name="liveLink"
          rules={[
            { required: true, message: "Please input start date!" },
            { type: "url", message: "Please enter a valid url!" },
          ]}
        >
          <Input
            className="w-full py-2"
            placeholder="e.g; https://emoji-vault.vercel.app"
          />
        </Form.Item>
        <Form.Item
          label="GitHub Link"
          className="col-span-2 lg:col-span-1"
          name="githubLink"
          rules={[
            { required: true, message: "Please input github link!" },
            { type: "url", message: "Please enter valid url!" },
          ]}
        >
          <Input
            className="w-full py-2"
            placeholder="e.g; https://github.com/rumaisanaveed/emoji-vault.git"
          />
        </Form.Item>
        <Form.Item
          label="Start Date"
          className="col-span-2 lg:col-span-1"
          name="projectStartDate"
          rules={[{ required: true, message: "Please input start date!" }]}
        >
          <DatePicker className="w-full py-2" placeholder="Enter date.." />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="projectEndDate"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input end date!" }]}
        >
          <DatePicker className="w-full py-2" placeholder="Enter date.." />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          className="col-span-2"
          rules={[
            {
              required: true,
              message: "Please input summary!",
            },
          ]}
        >
          <RichTextEditor value={description} onChange={onChange} />
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

export default ProjectsForm;
