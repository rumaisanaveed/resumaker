import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useState, useContext } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import Button from "../buttons/Button";
import { RichTextEditor } from "../RichTextEditor";
import { useUser } from "@clerk/nextjs";
import { CgSpinner } from "react-icons/cg";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import Context from "@/app/context/Context";
import { handleSave, withLoading } from "@/app/utils/apiHandler";

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

  const handleSummarySave = () => {
    withLoading(
      () =>
        handleSave(
          { summary: value },
          "summary",
          {},
          resumeId,
          user.id,
          setIsFormSubmitted
        ),
      setLoading
    );
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
