// Topic.tsx
import React from "react";
import "./topic.css";

interface TopicProps {
  content: string;
  title: string;
  date: string;
  text: string;
  script: string;
}

const Topic: React.FC<TopicProps> = ({
  content,
  title,
  date,
  text,
  script,
}) => {
  return (
    <a className="Topic">
      <div className="content">
        <div className="header">
          <h3 className="title">{title}</h3>
          <p className="date">{date}</p>
        </div>
        <p className="text">{text}...</p>
        <p className="content">{content}</p>
        <a className="see_more" href={script}>
          See more
        </a>
      </div>
    </a>
  );
};

export default Topic;
