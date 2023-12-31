import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./question.css";

interface QuestionProps{
  option: string;
}

const Question:React.FC<QuestionProps> = ({ option }) => {
  const [summary, setSummary] = useState("");
  const [editorState, setEditorState] = useState("");
  const [tags, setTags] = useState("");
  const [token, setToken] = useState('');
  const nav = useNavigate();

  const handleSummaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSummary(e.target.value);
  };

  const handleEditorChange = (value: string) => {
    setEditorState(value);
  };

  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const handlePost = () => {
    console.log("Post...");
    nav("/");
  };
  const handleClose = () => {
    nav("/topic");
  };
  
  return (
    <div className="question-label-container">
      <h3>Summarize your problem</h3>
      <input
        type="text"
        id="question-input"
        value={summary}
        onChange={handleSummaryChange}
      />

      <h3>Provide details</h3>
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

      <h3>Tags</h3>
      <input
        type="text"
        id="tags-input"
        value={tags}
        onChange={handleTagsChange}
      />
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

export default Question;
