import dummy from "@/app/data/dummy";
import React, { useContext } from "react";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";

export const Summary = () => {
  const { resumeData } = useContext(Context);
  const { summary } = resumeData;
  return (
    <>
      {summary && (
        <>
          <Separator />
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </>
      )}
    </>
  );
};
