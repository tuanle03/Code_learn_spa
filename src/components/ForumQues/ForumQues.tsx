// ForumQues.tsx
import "./ForumQues.css";
import React from "react";
import RateButton from "../RateButton/RateButton";
import AddQuesBtn from "../AddQuesBtn/AddQuesBtn";

// Define the interface for the ForumQues data
interface ForumQuesProps {
  title: string;
  author: string;
  publicationDate: string;
  view: number;
  content: string;
  like: number;
}

const ForumQues: React.FC<ForumQuesProps> = ({ title, author, publicationDate, view, content, like }) => {

  return (
    <div className="fullForumQues">
      <div className="headForumQues">
        <h1>
          {title} <AddQuesBtn />
        </h1>
        <div className="authorAndPublicationDate">
          <p>By {author}</p>
          <p>{publicationDate}</p>
          <p>View {view}</p>
        </div>
      </div>

      <div className="bodyForumQues">
        <div className="rateBtn">
          <RateButton initialRating={like} />
        </div>
        <div className="bodyForumQuesContent">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};


export default ForumQues;
