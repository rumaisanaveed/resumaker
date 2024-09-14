import dummy from "@/app/data/dummy";
import React from "react";
import { Separator } from "../UI/Separator";

export const Summary = () => {
  return (
    <>
      <Separator />
      <div>
        <p>{dummy.summary.intro}</p>
        <p>{dummy.summary.skills}</p>
        <p>{dummy.summary.experience}</p>
      </div>
    </>
  );
};
