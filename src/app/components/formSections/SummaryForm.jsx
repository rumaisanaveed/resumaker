import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useState, useContext } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import Button from "../buttons/Button";
import { RichTextEditor } from "../RichTextEditor";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import { db } from "@/app/firebaseConfig";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { toast } from "sonner";
import Context from "@/app/context/Context";

const SummaryForm = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [resumeId, setResumeId] = useLocalStorage("resumeId");
  const { setIsFormSubmitted } = useContext(Context);

  const onChange = (content) => {
    setValue(content);
    console.log(content);
  };

  const handleSummarySave = async () => {
    setLoading(true);
    try {
      if (!user.id || !resumeId) {
        console.error("resumeId or userId is missing");
        setLoading(false);
        return;
      }
      const ref = doc(db, "users", user.id, "resumes", resumeId);
      const dataToSave = { summary: value };
      await setDoc(ref, dataToSave, { merge: true });
      console.log("Summary saved successfully!");
      setIsFormSubmitted(true);
      setLoading(false);
      toast.success("Data  saved successfully");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("An error occured. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={globalStyles.formComponentContainer}>
      <ActiveFormHeader
        title="Summary"
        description="Add summary for your job title"
      />
      <div className="mb-5">
        <RichTextEditor value={value} onChange={onChange} />
      </div>
      <Button
        type="primary"
        className="py-1.5 px-5"
        onClick={handleSummarySave}
      >
        {loading ? <CgSpinner style={{ color: "white" }} /> : <p>Save</p>}
      </Button>
    </div>
  );
};

export default SummaryForm;
