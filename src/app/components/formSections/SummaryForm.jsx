import globalStyles from "@/app/styles/cssInJsStyles/globalStyles";
import React, { useState } from "react";
import { ActiveFormHeader } from "../ActiveFormHeader";
import Button from "../buttons/Button";
import { RichTextEditor } from "../RichTextEditor";

const SummaryForm = () => {
  const [value, setValue] = useState("");

  const onChange = (content) => {
    setValue(content);
    console.log(content);
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
      <Button type="primary" className="py-1.5 px-5">
        Save
      </Button>
    </div>
  );
};

export default SummaryForm;
