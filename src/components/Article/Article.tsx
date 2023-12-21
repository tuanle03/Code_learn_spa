// ArticleContainer.tsx (or any other appropriate component/container)
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ArticleData {
  title: string;
  author: string;
  publicationDate: string;
  content: string;
  imageUrl: string;
}

const ArticleContainer: React.FC = () => {
  const discussionId = useParams();
  console.log("Discussion ID:", discussionId);

  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetch(
          `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/posts/${discussionId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch article data");
        }

        const data: ArticleData = await response.json();
        setArticleData(data);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticleData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
      {articleData && (
        <div className="fullArticle">
          <div className="headArticle">
            <h1>{articleData.title}</h1>
            <div className="author publicationDate">
              <p>By {articleData.author}</p>
              <p>{articleData.publicationDate}</p>
            </div>
          </div>

          <div className="bodyArticle">
            <p>{articleData.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleContainer;
