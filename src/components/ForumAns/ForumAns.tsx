// ForumAns.tsx
import "./ForumAns.css";
import React, { useState } from "react";
import RateButton from "../RateButton/RateButton";
import AddAnsBtn from "../AddAnsBtn/AddAnsBtn";

// Define the interface for the ForumAns data
interface ForumAnsProps {
  author: string;
  publicationDate: string;
  title: string;
  avatar: string;
  ForumAns: string;
  initialLike: number;
}

// Create a sample data set
const sampleProps: ForumAnsProps = {
  author: "Sample Author",
  publicationDate: "January 1, 2023",
  title: "Answer",
  avatar: "https://mcdn.coolmate.me/image/April2023/meme-ech-xanh-9.jpg",
  ForumAns:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  initialLike: 0,
};

const ForumAns: React.FC<ForumAnsProps> = ({
  author,
  publicationDate,
  title,
  avatar,
  ForumAns,
  initialLike,
}) => {
  const maxLength = 200;
  const [like, setLike] = useState(initialLike);
  const [expanded, setExpanded] = useState(false);
  const [newForumAns, setNewForumAns] = useState("");

  const handleLike = () => {
    setLike(like + 1);
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const displayForumAns = expanded ? ForumAns : ForumAns.slice(0, maxLength);

  const handleForumAnsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewForumAns(event.target.value);
  };

  const addForumAns = () => {
    console.log("New ForumAns:", newForumAns);
    setNewForumAns("");
  };

  return (
    <div className="ForumAnsContainer">
      <div className="headForumAns">
        <h1>{sampleProps.title}</h1>
        <AddAnsBtn />
      </div>
      <div className="bodyForumAns">
        <div>
          <RateButton initialRating={like} />
        </div>

        <div className="CommentAndAddComment">
          <div className="ForumAnsActions">
            <button className="likeButton" onClick={handleLike}>
              👍🏿 ({like})
            </button>
          </div>

          <div className="avatar-and-ForumAns">
            <img className="avatar" src={avatar} alt="User Avatar" />
            <p className="ForumAnsText">
              {displayForumAns}
              {!expanded && ForumAns.length > maxLength && (
                <span className="seeMore" onClick={toggleExpansion}>
                  ...See more
                </span>
              )}
            </p>
          </div>

          <div className="author publicationDate">
            <p>
              By <b>{sampleProps.author}</b>
            </p>
            <p>
              Date <b>{sampleProps.publicationDate}</b>
            </p>
          </div>

          <div className="addForumAnsContainer">
            <textarea
              value={newForumAns}
              onChange={handleForumAnsChange}
              placeholder="Enter your comment..."
            />
            <button onClick={addForumAns}>
              <i className="fi fi-rr-paper-plane submit"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ForumAns.defaultProps = sampleProps;

export default ForumAns;
