"use client";
import { Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";
import Context from "../context/Context";
import { useUser } from "@clerk/nextjs";
import { saveToFirestore, withLoading } from "../utils/apiHandler";

export default function AddResume() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setResumeId, setResumeTitle, resumeTitle, setIsFormSubmitted } =
    useContext(Context);
  const { user } = useUser();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCreateResume = async () => {
    const newResumeId = uuidv4();
    localStorage.setItem("resumeId", newResumeId);
    setResumeId(newResumeId);
    withLoading(async () => {
      await saveToFirestore(
        ["users", user.id, "resumes", newResumeId],
        {
          resumeTitle,
        },
        setIsFormSubmitted
      );
      router.push("/create-resume");
    }, setLoading);
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
        okButtonProps={{ loading }}
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
