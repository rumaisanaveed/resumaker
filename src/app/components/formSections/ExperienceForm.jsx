import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input, DatePicker } from "antd";
import Button from "../buttons/Button";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

export const ExperienceForm = () => {
  const { TextArea } = Input;

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
          <TextArea rows={6} className="w-full" />
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
