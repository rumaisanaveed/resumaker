"use client";
import { Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import Button from "../buttons/Button";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import Context from "@/app/context/Context";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { toast } from "sonner";

const PersonalDetailsForm = () => {
  const { user } = useUser();
  const { resumeTitle } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useLocalStorage("resumeId");
  const { setIsFormSubmitted } = useContext(Context);

  const handleSave = async (values) => {
    console.log("Form values:", values);
    setLoading(true);
    try {
      if (!resumeId || !user.id) {
        console.error("resumeId or userId is missing");
        setLoading(false);
        return;
      }
      const resumeRef = doc(db, "users", user.id, "resumes", resumeId);
      const dataToSave = {
        personalDetails: {
          ...values,
          portfolio: values.portfolio ? values.portfolio : "",
        },
      };
      await setDoc(resumeRef, dataToSave, { merge: true });
      console.log("Resume data saved successfully!");
      setLoading(false);
      setIsFormSubmitted(true);
      toast.success("Data saved successfully!");
    } catch (error) {
      console.error("Error saving resume data:", error);
      toast.error("An error occured. Try again!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
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
          name="portfolioWebsite"
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
