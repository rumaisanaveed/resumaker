import React, { useContext, useEffect } from "react";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";
import styleLists from "@/app/utils/styleLists";

export const Summary = () => {
  const { resumeData } = useContext(Context);
  const { summary } = resumeData;

  const formattedSummary = summary ? styleLists(summary) : "";

  useEffect(() => {
    console.log(summary);
  }, [summary]);

  return (
    <>
      {summary && (
        <>
          <Separator />
          <div
            dangerouslySetInnerHTML={{
              __html: formattedSummary,
            }}
          />
        </>
      )}
    </>
  );
};
