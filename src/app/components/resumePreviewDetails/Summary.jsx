import React, { useContext, useEffect } from "react";
import { Separator } from "../UI/Separator";
import Context from "@/app/context/Context";

export const Summary = () => {
  const { resumeData } = useContext(Context);
  const { summary } = resumeData;

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
              __html: summary,
            }}
          />
        </>
      )}
    </>
  );
};
