import dummy from "@/app/data/dummy";
import React from "react";
import { Separator } from "../UI/Separator";

export const Summary = () => {
  return (
    <>
      <Separator />
      <div>{dummy.summary}</div>
    </>
  );
};
