// Comment.tsx
import React, { useEffect, useState } from "react";
import "./Comment.css";

interface CommentProps {
  id: string;
  content?: string;
  user_name?: string;
  user_avatar?: string;
}

const Comment: React.FC<CommentProps> = ({ id }) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [avatar, setAvatar] = useState("");
  const [initialLike, setInitialLike] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch(
      "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/" +
        id +
        "/comments",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const formattedComment = data.posts.map((post: any) => ({
            id: post.id,
            user_name: post.user_name,
            user_avatar: post.user_avatar,
            content: post.content,
          }));
          setCommentCount(comments.length);

          setComments(formattedComment);
        } else {
          console.error("Error fetching Comment data:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching Comment data:", error);
        alert("error");
      });
  }, []);

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

  const displayComments = expanded ? comments : comments.slice(0, maxLength);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewComment(event.target.value);
  };

  const addComment = async (discussionId: string) => {
    try {
      const cookies = document.cookie;
      const cookieArray = cookies.split("; ");
      const tokenCookie = cookieArray.find((cookie) =>
        cookie.startsWith("Token=")
      );

      if (tokenCookie) {
        const tokenValue = tokenCookie.split("=")[1];
        setToken(tokenValue);

        const formData = new URLSearchParams();
        formData.append("content", newComment);

        const response = await fetch(
          `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/${discussionId}/comments`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              Token: tokenValue,
            },
            body: formData.toString(),
          }
        );

        console.log("Response Status Code:", response.status);
        const responseData = await response.json();
        if (response.ok) {
          console.log("Post successful");
          setNewComment("");
          window.location.reload();
        } else {
          console.error("Update failed:", response.statusText);
          alert(responseData.errors);
        }
      }
    } catch (error) {
      console.error("Error during post:", error);
      alert("Error. Try again");
    }
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

        {displayComments.map((comment) => (
          <div key={comment.id} className="borderComment">
            <div className="avatar-and-comment">
              <img
                className="avatar"
                src={comment.user_avatar}
                alt="User Avatar"
              />
              <p className="commentText">{comment.content}</p>
            </div>
            <div className="addCommentContainer">
              {/* Add any content or components related to addCommentContainer */}
            </div>
          </div>
        ))}

        {!expanded && comments.length > maxLength && (
          <span className="seeMore" onClick={toggleExpansion}>
            ...See more
          </span>
        )}

        <div className="addCommentContainer">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Enter your comment..."
          />
        <button className="sendAnswerBtn" onClick={() => addComment(id)}>
          <i className="fi fi-rr-paper-plane submit"></i>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
