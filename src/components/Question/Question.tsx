import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./question.css";

const Question = () => {
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

  const handlePost = async() => {
      try{
      const cookies = document.cookie;
      const cookieArray = cookies.split('; ');
      const tokenCookie = cookieArray.find(cookie => cookie.startsWith('Token='));

      if (tokenCookie) {
        const tokenValue = tokenCookie.split('=')[1];
        setToken(tokenValue);
      
      const formData = new URLSearchParams();
      formData.append("content", editorState);
      formData.append("title", summary);

      const response = await fetch("https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions", 
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Token": tokenValue
        },
        body: formData.toString(),
      });
      console.log("Response Status Code:", response.status);
      const responseData = await response.json();
      if (response.ok) {
        console.log("Post successful");
        nav("/topic");
      } else {
        console.error("Update failed:", response.statusText);
        alert(responseData.errors);
      }
    }
  }
 catch (error) {
  console.error("Error during post:", error);
  alert("Error. Try again");
}

  }
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
