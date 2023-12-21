// ForumQues.tsx
import "./ForumQues.css";
import React from "react";
import RateButton from "../RateButton/RateButton";
import AddQuesBtn from "../AddQuesBtn/AddQuesBtn";

// Define the interface for the ForumQues data
interface ForumQuesProps {
  title: string;
  author: string;
  publicationDate: string;
  view: number;
  content: string;
  imageUrl: string;
}

// Create a sample data set
const sampleProps: ForumQuesProps = {
  title: "Sample Question",
  author: "Sample Author",
  publicationDate: "January 1, 2023",
  view: 0,
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  imageUrl:
    "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
};

const ForumQues: React.FC = () => {
  // Use the sample data within the component
  return (
    <div className="fullForumQues">
      <div className="headForumQues">
        <h1>
          {sampleProps.title} <AddQuesBtn />
        </h1>
        <div className="authorAndPublicationDate">
          <p>By {sampleProps.author}</p>
          <p>{sampleProps.publicationDate}</p>
          <p>View {sampleProps.view}</p>
        </div>
      </div>

      <div className="bodyForumQues">
        <div className="rateBtn">
          <RateButton />
        </div>
        <div className="bodyForumQuesContent">
          <p>{sampleProps.content}</p>
          <img className="img" src={sampleProps.imageUrl} alt="image" />
        </div>
      </div>
    </div>
  );
};

ForumQues.defaultProps = sampleProps;

export default ForumQues;
