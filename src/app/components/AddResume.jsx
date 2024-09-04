"use client";
import { Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";

export default function AddResume() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCreateResume = () => {
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
        <Input className="mt-3" rootClassName="rm-resume-title-input" />
      </Modal>
    </>
  );
}
