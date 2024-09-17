import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Toggle buttons
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      ["link"], // Add a link
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
};
