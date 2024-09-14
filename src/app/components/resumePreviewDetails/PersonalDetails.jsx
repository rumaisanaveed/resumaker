import dummy from "@/app/data/dummy";
import React from "react";

export const PersonalDetails = () => {
  return (
    <>
      <div className="">
        <h1>{dummy.personalDetails.name}</h1>
        <h2>{dummy.personalDetails.title}</h2>
        <p>{dummy.personalDetails.email}</p>
      </div>
      <div>
        <h1>{dummy.personalDetails.phone}</h1>
        <h2>{dummy.personalDetails.portfolio}</h2>
      </div>
    </>
  );
};
