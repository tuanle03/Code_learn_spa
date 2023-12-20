import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './answer.css'

const Answer = () => {
  const [editorState, setEditorState] = useState("");
  const nav = useNavigate();

  const handleEditorChange = (value: string) => {
    setEditorState(value);
  };

  const handlePost = () => {
    console.log("Post...");
    nav("/");
  };
  const handleClose = () => {
    nav("/");
  };

  return (
    <div className="question-label-container">
      <h3>Your answer</h3>
      <div className="question-input-toolbar">
        <ReactQuill
          value={editorState}
          onChange={handleEditorChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "video"],
            ],
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "link",
            "image",
            "video",
          ]}
        />
      </div>
      <div className="button">
        <button className="post" onClick={handlePost}>
          Post Your Question
        </button>

        <button className="close" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Answer;
