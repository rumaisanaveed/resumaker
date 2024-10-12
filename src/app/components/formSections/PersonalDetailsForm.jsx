"use client";
import { Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import Button from "../buttons/Button";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import Context from "@/app/context/Context";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { withLoading, handleSave } from "@/app/utils/apiHandler";

const PersonalDetailsForm = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useLocalStorage("resumeId");
  const { setIsFormSubmitted, setResumeData } = useContext(Context);

  const handlePersonalDetailsSave = (values) => {
    setResumeData({ personalDetails: { ...values } });
    withLoading(
      () =>
        handleSave(
          values,
          "personalDetails",
          {},
          resumeId,
          user.id,
          setIsFormSubmitted
        ),
      setLoading
    );
  };

  const inputYPadding = "py-2";
  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Personal Details"
        description="Get Started with the basic information"
      />
      <Form
        layout="vertical"
        rootClassName="rm-form"
        autoComplete="off"
        onFinish={handlePersonalDetailsSave}
      >
        <Form.Item
          label="Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            placeholder="e.g; Rumaisa Naveed"
            className={`${inputYPadding}`}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="e.g; abc@gmail.com"
            className={`${inputYPadding}`}
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
              pattern: /^\d+$/,
            },
          ]}
        >
          <Input
            placeholder="e.g; 99999999999"
            className={`${inputYPadding}`}
          />
        </Form.Item>

        <Form.Item
          label="Portfolio Website"
          name="portfolioWebsite"
          rules={[
            {
              type: "url",
              message: "Please enter a valid URL!",
            },
          ]}
        >
          <Input
            placeholder="e.g; https://rumaisa.tech"
            className={`${inputYPadding}`}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="py-1.5 px-5 flex items-center justify-center"
          >
            {loading ? <CgSpinner style={{ color: "white" }} /> : <p>Save</p>}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetailsForm;
