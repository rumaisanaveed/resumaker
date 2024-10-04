"use client";
import { Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";
import Context from "../context/Context";
import { useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "sonner";

export default function AddResume() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setResumeId, setResumeTitle, resumeTitle } = useContext(Context);
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
    try {
      const resumeRef = doc(db, "users", user.id, "resumes", resumeId);
      await setDoc(resumeRef, { resumeTitle });
      console.log("Resume title saved successfully");
      setLoading(false);
      router.push("/create-resume");
    } catch (error) {
      console.error(error);
      toast.error("An error occured. Try again!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
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
