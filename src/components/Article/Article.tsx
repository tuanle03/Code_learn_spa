// Article.tsx
import "./article.css";
import React from "react";

// Define the interface for the article data
interface ArticleData {
  title: string;
  author: string;
  publicationDate: string;
  content: string;
  imageUrl: string;
}

// Create a sample data set
const sampleData: ArticleData = {
  title: "Sample Paper Title",
  author: "Sample Author",
  publicationDate: "January 1, 2023",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  imageUrl:
    "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
};

const Article: React.FC = () => {
  // Use the sample data within the component
  return (
    <div className="fullArticle">
      <div className="headArticle">
        <h1>{sampleData.title}</h1>
        <div className="author publicationDate">
          <p>By {sampleData.author}</p>
          <p>{sampleData.publicationDate}</p>
        </div>
      </div>

      <div className="bodyArticle">
        <p>{sampleData.content}</p>
        <img className="img" src={sampleData.imageUrl} alt="image" />
      </div>
    </div>
  );
};

export default Article;
