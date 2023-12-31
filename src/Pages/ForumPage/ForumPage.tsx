// Trong file ForumPage.tsx
import React, { useEffect, useState } from "react";
import ForumQues from "../../components/ForumQues/ForumQues.tsx";
import ForumAns from "../../components/ForumAns/ForumAns.tsx";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { useParams } from "react-router-dom";
import "./forumPage.css";

interface ForumQuesProps {
  title: string;
  author: string;
  publicationDate: string;
  view: number;
  content: string;
  like: number;
}

interface AnswerProps {
  author: string;
  publicationDate: string;
  avatar: string;
  ForumAns: string;
  initialLike: number;
}

const ForumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useState("");
  const [post, setPost] = useState<ForumQuesProps>({
    title: "",
    author: "",
    publicationDate: "",
    view: 0,
    content: "",
    like: 0,
  });
  const [newForumAns, setNewForumAns] = useState("");
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (id) {
      fetchData(id);
      fetchComment(id);
    }
  }, [id]);

  const fetchData = async (discussionId: string) => {
    try {
      const response = await fetch(
        `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/${discussionId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Discussion data:", data);

        const author = data.discussion.user ? data.discussion.user.name : "Unknown Author";

        setPost({
          title: data.discussion.title,
          content: data.discussion.content,
          author: author,
          publicationDate: data.discussion.created_at,
          view: 1,
          like: 0,
        });
      } else {
        console.error("Đã có lỗi khi gọi API:", response.statusText);
      }
    } catch (error: any) {
      console.error("Đã có lỗi khi gọi API:", error.message);
    }
  };

  const handleForumAnsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewForumAns(event.target.value);
  };

  const addForumAns = async (discussionId: string) => {
    try {
      const cookies = document.cookie;
      const cookieArray = cookies.split("; ");
      const tokenCookie = cookieArray.find((cookie) => cookie.startsWith("Token="));

      if (tokenCookie) {
        const tokenValue = tokenCookie.split("=")[1];
        setToken(tokenValue);

        const formData = new URLSearchParams();
        formData.append("content", newForumAns);

        const response = await fetch(
          `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/${discussionId}/comments`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              Token: tokenValue,
            },
            body: formData.toString(),
          }
        );

        console.log("Response Status Code:", response.status);
        const responseData = await response.json();
        if (response.ok) {
          console.log("Post successful");
          setNewForumAns("");
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

  const fetchComment = async (discussionId: string) => {
    try {
      const response = await fetch(
        `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/${id}/comments`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        const formattedAnswers = data.comments.map((comment: any) => ({
          author: comment.user?.name || "Unknown Author",
          publicationDate: comment.created_at,
          avatar: comment.user?.avatar_url || "/src/assets/avatar.png",
          ForumAns: comment.content,
          initialLike: 0,
        }));

        setAnswers(formattedAnswers);
        setCommentCount(1);
      } else {
        console.error("No Comment data:", data.error);
      }
    } catch (error) {
      console.error("Error fetching Comment data:", error);
      alert("error");
    }
  };

  return (
    <>
      <Header />
      <ForumQues
        title={post.title}
        author={post.author}
        publicationDate={post.publicationDate}
        view={post.view}
        content={post.content}
        like={post.like}
      />
      <div>
        <h1 className="AnsText">Answers</h1>
        {commentCount === 1 &&
          answers.map((answer, index) => (
            <ForumAns
              key={index}
              ForumAns={answer.ForumAns}
              initialLike={answer.initialLike}
              author={answer.author}
              publicationDate={answer.publicationDate}
              avatar={answer.avatar}
              id={id ?? ""}
            />
          ))}
      </div>
      <div className="addForumAnsContainer">
        <textarea
          value={newForumAns}
          onChange={handleForumAnsChange}
          placeholder="Enter your comment..."
        />
        <button className="sendAnswerBtn" onClick={() => addForumAns(id ?? "")}>
          <i className="fi fi-rr-paper-plane submit"></i>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ForumPage;
