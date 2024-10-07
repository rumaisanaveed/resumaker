"use client";
import { useUser } from "@clerk/nextjs";
import { Dropdown } from "antd";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import { db } from "../firebaseConfig";
import { MdEditDocument } from "react-icons/md";
import { withLoading } from "../utils/apiHandler";
import Context from "../context/Context";

export const Resumes = () => {
  const [resumes, setResumes] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setResumeData } = useContext(Context);
  const { user } = useUser();

  const getResumeList = async () => {
    const fetchResumes = async () => {
      if (user) {
        const querySnapshot = await getDocs(
          collection(db, `users/${user.id}/resumes`)
        );
        const userResumes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResumes(userResumes);
      }
    };
    await withLoading(fetchResumes, setLoading);
  };

  useEffect(() => {
    getResumeList();
  }, []);

  useEffect(() => {
    setResumeData({});
  }, []);

  const handleDelete = async (resumeId) => {
    const deleteResume = async () => {
      if (user) {
        await deleteDoc(doc(db, `users/${user.id}/resumes`, resumeId));
        setResumes((prevResumes) =>
          prevResumes.filter((resume) => resume.id !== resumeId)
        );
      }
    };

    await withLoading(deleteResume, setIsDeleting);
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="relative shadow pt-2 flex items-center justify-center transition-all rounded-lg h-[350px] md:h-[300px] border-dashed"
            >
              <MdEditDocument style={{ color: resume.color, fontSize: 50 }} />
              <div className="absolute bottom-0 pl-3 left-0 h-10 w-full bg-gray-100 rounded-b-lg flex items-center justify-between">
                <p className="text-sm text-black">{resume.resumeTitle}</p>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: (
                          <p
                            className="cursor-pointer"
                            onClick={() => handleDelete(resume.id)}
                          >
                            {isDeleting ? <>Deleting</> : <>Delete</>}
                          </p>
                        ),
                      },
                      {
                        key: "2",
                        label: <Link href="/view-resume">Edit</Link>,
                      },
                    ],
                  }}
                  placement="bottomRight"
                >
                  <PiDotsThreeVerticalLight
                    style={{
                      fontSize: "25px",
                      color: "black",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  />
                </Dropdown>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
