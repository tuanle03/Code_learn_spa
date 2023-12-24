import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./article.css"

interface ArticleData {
  id: number;
  title: string;
  author: string;
  publicationDate: string;
  content: string;
  imageUrl: string;
}

interface ArticleID {
  discussionId: string;
}

const ArticleContainer: React.FC<ArticleID> = ({ discussionId }) => {
  console.log("Discussion ID:", discussionId);


  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const api = `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/posts/${discussionId}`;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setArticleData(data.post);
          setTitle(data.post.title);
          setAuthor("Chang Chang");
          setPublicationDate(data.post.created_at);
          setContent(data.post.body);
        } else {
          console.error("Error fetching post:", response.status);
          setArticleData(null); // Clear the data in case of an error
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setArticleData(null); // Clear the data in case of an error
      } finally {
        setLoading(false);
      }
    };

    if (discussionId) {
      fetchPost();
    }
  }, [discussionId, api]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!articleData) {
    return <div className="failed">Post not found</div>;
  }

  return (
    <div className="fullArticle">
      <div className="headArticle">
        <h1>{title}</h1>
        <div className="author publicationDate">
          <p>By {author}</p>
          <p>{publicationDate}</p>
        </div>
      </div>

      <div className="bodyArticle">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticleContainer;
