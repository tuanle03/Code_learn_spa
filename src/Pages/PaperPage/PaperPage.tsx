// PaperPage.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Article from "../../components/Article/Article.tsx";
import Comment from "../../components/Comment/Comment.tsx";

interface PostData {
  id: number;
  title: string;
  body: string;
  total_view: number;
  total_feedback: number;
  created_at: string;
}

const PaperPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/posts/${id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPost(data.post);
        } else {
          console.error("Error fetching post:", response.status);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <>
      <Header />
      {post && <Article discussionId={id ?? ''} />}

      {post && (
        <Comment
          // user_avatar="https://mcdn.coolmate.me/image/April2023/meme-ech-xanh-9.jpg"
          // content="Sample Comment Text"
          // initialLike={0}
          // commentCount={1}
        />
      )}
      <Footer />
    </>
  );
};

export default PaperPage;
