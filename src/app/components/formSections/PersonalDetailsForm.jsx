"use client";
import { Form, Input } from "antd";
import React, { useEffect } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import Button from "../buttons/Button";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import { useUser } from "@clerk/nextjs";

const PersonalDetailsForm = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log(user.id);
  }, [user.id]);

  const handleSave = (values) => {
    console.log(values);
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
        onFinish={handleSave}
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
            placeholder="Enter your name..."
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
              type: "email", // Adding validation for email format
            },
          ]}
        >
          <Input
            placeholder="Enter your email address..."
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
              pattern: /^\d+$/, // Adding validation to accept only numbers
            },
          ]}
        >
          <Input
            placeholder="Enter your phone number..."
            className={`${inputYPadding}`}
          />
        </Form.Item>

        <Form.Item
          label="Portfolio Website"
          name="portfolio"
          rules={[
            {
              type: "url", // Adding validation for URL format
              message: "Please enter a valid URL!",
            },
          ]}
        >
          <Input
            placeholder="Enter your portfolio URL..."
            className={`${inputYPadding}`}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="py-1.5 px-5">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetailsForm;
