import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useState, useContext } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Select } from "antd";
import Button from "../buttons/Button";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import Context from "@/app/context/Context";
import { handleSave, withLoading } from "@/app/utils/apiHandler";

const SkillsForm = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useLocalStorage("resumeId");
  const { setIsFormSubmitted, setResumeData } = useContext(Context);

  const handleSkillsSave = (values) => {
    setResumeData((prev) => ({
      ...prev,
      skills: {
        programming: [...values.programming],
        toolsAndPlatforms: [...values.toolsAndPlatforms],
      },
    }));
    withLoading(
      () =>
        handleSave(values, "skills", {}, resumeId, user.id, setIsFormSubmitted),
      setLoading
    );
  };
  const programmingOptions = [
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
  const toolsAndPlatformOptions = [
    { value: "VS Code" },
    { value: "Figma" },
    { value: "Jira" },
    { value: "Slack" },
    { value: "Postman" },
  ];
  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Skills"
        description="Showcase your skills to highlight your expertise and attract potential employers."
      />
      <Form
        className="rm-form"
        onFinish={handleSkillsSave}
        layout="vertical"
        name="projects-form"
      >
        <Form.Item
          label="Programming"
          name="programming"
          className="rm-multi-select w-full"
          rules={[
            { required: true, message: "Please input programming skills!" },
          ]}
        >
          <Select
            mode="tags"
            dropdownStyle={{ overflowY: "auto" }}
            className="w-full"
            maxTagCount={5}
            style={{ width: "100%" }}
            placeholder="Select or add programming skills.."
            options={programmingOptions}
          />
        </Form.Item>
        <Form.Item
          label="Tools & Platforms"
          name="toolsAndPlatforms"
          className="rm-multi-select w-full"
          rules={[
            { required: true, message: "Please input tools or platforms..!" },
          ]}
        >
          <Select
            mode="tags"
            dropdownStyle={{ overflowY: "auto" }}
            className="w-full"
            maxTagCount={6}
            style={{ width: "100%" }}
            placeholder="Select or add tools or platforms.."
            options={toolsAndPlatformOptions}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="py-1.5 px-5">
            {loading ? <CgSpinner style={{ color: "white" }} /> : <p>Save</p>}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SkillsForm;
