import React from "react";
import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import { ActiveFormHeader } from "../ActiveFormHeader";
import { Form, Input, DatePicker } from "antd";
import Button from "../buttons/Button";

const EducationForm = () => {
  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Education"
        description="Enter your educational details to highlight your qualifications."
      />
      <Form
        className="rm-form grid gap-x-3 gap-y-0 grid-cols-2"
        layout="vertical"
        name="projects-form"
      >
        <Form.Item
          label="University"
          name="universityName"
          className="col-span-2 lg:col-span-1"
          rules={[
            { required: true, message: "Please input your university name!" },
          ]}
        >
          <Input className="py-2" placeholder="Enter university name..." />
        </Form.Item>
        <Form.Item
          label="Degree"
          name="degreeName"
          className="col-span-2 lg:col-span-1 rm-multi-select"
          rules={[
            { required: true, message: "Please input your degree name!" },
          ]}
        >
          <Input
            className="py-2"
            placeholder="Enter your university degree..."
          />
        </Form.Item>
        <Form.Item
          label="City"
          className="col-span-2 lg:col-span-1"
          name="universityCity"
          rules={[
            { required: true, message: "Please input the university city!" },
          ]}
        >
          <Input
            className="w-full py-2"
            placeholder="Enter the city in which the university is located.."
          />
        </Form.Item>
        <Form.Item
          label="Country"
          className="col-span-2 lg:col-span-1"
          name="universityCountry"
          rules={[
            {
              required: true,
              message: "Please input your university's country..!",
            },
          ]}
        >
          <Input
            className="w-full py-2"
            placeholder="Enter the country in which the university is located.."
          />
        </Form.Item>
        <Form.Item
          label="Start Date"
          className="col-span-2 lg:col-span-1"
          name="startDate"
          rules={[{ required: true, message: "Please input start date!" }]}
        >
          <DatePicker
            className="w-full py-2"
            placeholder="Enter your admission date.."
          />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          className="col-span-2 lg:col-span-1"
          rules={[{ required: true, message: "Please input end date!" }]}
        >
          <DatePicker
            placeholder="Enter your graduation date.."
            className="w-full py-2"
          />
        </Form.Item>
        <Form.Item
          label="CGPA"
          name="cgpa"
          className="col-span-2"
          rules={[
            {
              required: true,
              message: "Please input your cpga!",
            },
          ]}
        >
          <Input
            className="w-full py-2"
            placeholder="Enter the current cpga out of 4.."
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

export default EducationForm;
