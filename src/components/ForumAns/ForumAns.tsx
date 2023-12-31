// ForumAns.tsx
import "./ForumAns.css";
import React, { useState } from "react";
import RateButton from "../RateButton/RateButton";
import AddAnsBtn from "../AddAnsBtn/AddAnsBtn";

// Define the interface for the ForumAns data
interface ForumAnsProps {
  author: string;
  publicationDate: string;
  avatar: string;
  ForumAns: string;
  initialLike: number;
  id: string;
}

const ForumAns: React.FC<ForumAnsProps> = ({
  author,
  publicationDate,
  avatar,
  ForumAns,
  initialLike,
  id
}) => {
  const maxLength = 200;
  const [like, setLike] = useState(initialLike);
  const [expanded, setExpanded] = useState(false);
  publicationDate = publicationDate.substring(0,9);

  const handleLike = () => {
    setLike(like + 1);
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const displayForumAns = expanded ? ForumAns : ForumAns.slice(0, maxLength);

  return (
    <div className="ForumAnsContainer">
      <div className="headForumAns">
        <AddAnsBtn id = {id}/>
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
            <img className="avatar" src={avatar || "/src/assets/avatar.png"} alt="User Avatar" />
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
              By <b>{author}</b>
            </p>
            <p>
              Date <b>{publicationDate}</b>
            </p>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ForumAns;
