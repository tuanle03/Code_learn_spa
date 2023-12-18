// Comment.tsx
import React, { useState } from "react";
import "./Comment.css";

interface CommentProps {
  avatar: string;
  comment: string;
  initialLike: number;
  commentCount: number;
}

const sampleProps: CommentProps = {
  avatar: "https://mcdn.coolmate.me/image/April2023/meme-ech-xanh-9.jpg",
  comment:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  initialLike: 0,
  commentCount: 1,
};

const Comment: React.FC<CommentProps> = ({
  avatar,
  comment,
  initialLike,
  commentCount,
}) => {
  const maxLength = 200;
  const [like, setLike] = useState(initialLike);
  const [expanded, setExpanded] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLike(like + 1);
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const displayComment = expanded ? comment : comment.slice(0, maxLength);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewComment(event.target.value);
  };

  const addComment = () => {
    // Do something with the new comment, for example, send it to a server
    console.log("New Comment:", newComment);
    // Reset the comment input after submission
    setNewComment("");
  };

  return (
    <div className="commentContainer">
      <div className="headComment">
        <h1>Comment ({commentCount})</h1>
      </div>
      <div className="borderComment">
        <div className="commentActions">
          <button className="likeButton" onClick={handleLike}>
            👍🏿 ({like})
          </button>
        </div>

        <div className="avatar-and-comment">
          <img className="avatar" src={avatar} alt="User Avatar" />
          <p className="commentText">
            {displayComment}
            {!expanded && comment.length > maxLength && (
              <span className="seeMore" onClick={toggleExpansion}>
                ...See more
              </span>
            )}
          </p>
        </div>

        <div className="addCommentContainer">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Enter your comment..."
          />
          <button onClick={addComment}>💅🏻</button>
        </div>
      </div>
    </div>
  );
};

// Use sampleProps as default props
Comment.defaultProps = sampleProps;

export default Comment;
