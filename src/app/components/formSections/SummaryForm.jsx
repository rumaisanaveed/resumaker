import globalStyles from "@/app/globalStyles";
import React from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input } from "antd";
import Button from "../buttons/Button";

export const SummaryForm = () => {
  const { TextArea } = Input;
  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Summary"
        description="Add summary for your job title"
      />
      <Form className="rm-form" layout="vertical" name="summary-form">
        <Form.Item
          label="Summary"
          rules={[
            {
              required: true,
              message: "Please input summary!",
            },
          ]}
        >
          <TextArea
            rows={6}
            placeholder="Enter profile summary in the form of points.."
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
