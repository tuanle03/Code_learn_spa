import React, { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./answer.css";

const Answer = () => {
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : null;

  const [editorState, setEditorState] = useState("");
  const nav = useNavigate();
  const [token, setToken] = useState("");

  const handleEditorChange = (value: string) => {
    setEditorState(value);
  };

  const handlePost = async (id: number | null, content: string) => {
    try {
      if (id === null) {
        console.error("Invalid ID");
        return;
      }

      const cookies = document.cookie;
      const cookieArray = cookies.split("; ");
      const tokenCookie = cookieArray.find((cookie) =>
        cookie.startsWith("Token=")
      );

      const api =
        "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/" +
        id +
        "/comments";

      if (tokenCookie) {
        const tokenValue = tokenCookie.split("=")[1];
        setToken(tokenValue);

        const formData = new URLSearchParams();
        formData.append("id", id.toString());
        formData.append("content", content);
        const response = await fetch(api, {
          method: "POST",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            'Cache-Control': "no-cache, no-store, must-revalidate",
            'Token': tokenValue,
          },
          body: formData.toString(),
        });

        console.log(response.status);

        if (response.ok) {
          console.log("Post successful");
          nav("/");
        } else {
          console.error("Post failed:", response.statusText);
        }
      } else {
        nav("/sign_in");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
      alert("Error. Try again");
    }
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
        <button
          className="post"
          onClick={() => handlePost(numericId, editorState)}
        >
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
