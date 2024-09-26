"use client";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useState } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input, DatePicker, Select } from "antd";
import Button from "../buttons/Button";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { RichTextEditor } from "../RichTextEditor";

const ProjectsForm = () => {
  const [description, setDescription] = useState("");

  const onChange = (e) => {
    setDescription(e.target.value);
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
      >
        <Form.Item
          label="Name"
          name="projectName"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input position title!" }]}
        >
          <Input className="py-2" placeholder="Enter project name..." />
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
          rules={[{ required: true, message: "Please input start date!" }]}
        >
          <Input
            className="w-full py-2"
            placeholder="Enter project's live link.."
          />
        </Form.Item>
        <Form.Item
          label="GitHub Link"
          className="col-span-2 lg:col-span-1"
          name="githubLink"
          rules={[{ required: true, message: "Please input start date!" }]}
        >
          <Input
            className="w-full py-2"
            placeholder="Enter project's GitHub link.."
          />
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
              Save
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProjectsForm;
