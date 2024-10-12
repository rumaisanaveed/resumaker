"use client";
import { useUser } from "@clerk/nextjs";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { withLoading } from "../utils/apiHandler";
import Context from "../context/Context";
import { SkeletonLoader } from "./SkeletonLoader";
import { ShowResumes } from "./ShowResumes";
import { toast } from "sonner";

export const Resumes = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showNoResumesMessage, setShowNoResumesMessage] = useState(false);
  const {
    setResumeData,
    isResumesLoading,
    setIsResumesLoading,
    resumes,
    setResumes,
  } = useContext(Context);
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
    await withLoading(fetchResumes, setIsResumesLoading);
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

    await withLoading(deleteResume, setIsDeleting, () => {
      toast.success("Resume deleted successfully!");
    });
  };

  useEffect(() => {
    if (!isResumesLoading && resumes.length === 0) {
      const timeoutId = setTimeout(() => {
        setShowNoResumesMessage(true);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowNoResumesMessage(false);
    }
  }, [isResumesLoading, resumes]);

  return (
    <>
      {isResumesLoading && resumes.length === 0 && (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </>
      )}

      {!isResumesLoading && resumes.length > 0 && (
        <ShowResumes
          resumes={resumes}
          isDeleting={isDeleting}
          handleDelete={handleDelete}
        />
      )}

      {!isResumesLoading && resumes.length === 0 && showNoResumesMessage && (
        <div className="mt-4 lg:mt-0 text-2xl">
          <p>No resumes found...</p>
          <p>Start by creating one!!</p>
        </div>
      )}
    </>
  );
};
