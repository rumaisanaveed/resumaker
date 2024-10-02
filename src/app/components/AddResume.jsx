"use client";
import { Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";
import Context from "../context/Context";
import { useUser } from "@clerk/nextjs";

export default function AddResume() {
  // generate resume id and save in context
  // take that id and go the personal details form and save the data got from that form and save it on the
  // path /users/userId/resume
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setResumeId, setResumeTitle, resumeTitle } = useContext(Context);
  const { user } = useUser();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCreateResume = () => {
    const newResumeId = uuidv4();
    localStorage.setItem("resumeId", newResumeId);
    setResumeId(newResumeId);
    router.push("/create-resume");
  };

  return (
    <>
      <div
        className="hover:scale-105 flex items-center justify-center transition-all rounded-lg hover:shadow-md bg-gray-100 h-[350px] md:h-[300px] cursor-pointer border-dashed"
        onClick={handleModalOpen}
      >
        <CiSquarePlus
          style={{
            fontSize: "30px",
          }}
        />
      </div>

      <Modal
        title="Create New Resume"
        open={isModalOpen}
        onCancel={handleCancel}
        rootClassName="rm-resume-title-modal"
        onOk={handleCreateResume}
        okText="Create"
      >
        <p>Add a title to your new resume</p>
        <Input
          className="mt-3"
          rootClassName="rm-resume-title-input"
          onChange={(e) => setResumeTitle(e.target.value)}
        />
      </Modal>
    </>
  );
}
