// TopicPage.tsx
import "./topicPage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Topic from "../../components/Topic/Topic";
import Search from "../../components/Search/Search";
import AddQuesBtn from "../../components/AddQuesBtn/AddQuesBtn";
import Sort from "../../components/SortDropDown/Sort";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

interface Discussion {
  id: number;
  content: string;
  title: string;
  date: string;
  text: string;
  script: string;
}

const TopicPage: React.FC = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions",
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
        setDiscussions(data.discussions);
      } else {
        console.error("Đã có lỗi khi gọi API:", response.statusText);
      }
    } catch (error: any) {
      console.error("Đã có lỗi khi gọi API:", error.message);
    }
  };

  return (
    <>
      <Header signIn={false} avatar="" username="" />
      <div className="searchBar">
        <Search />
      </div>

      <div className="SortAndAskQues">
        <Sort />
        <div className="askQues">
          <AddQuesBtn />
        </div>
      </div>

      <div className="topic">
        {discussions.map((discussion) => (
          <Link key={discussion.id} to={`/forum/${discussion.id}`}>
            <Topic
              title={discussion.title}
              date={discussion.date}
              text={discussion.text}
              script={discussion.script}
              content={discussion.content}
            />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default TopicPage;
