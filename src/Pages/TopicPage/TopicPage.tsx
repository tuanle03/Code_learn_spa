// TopicPage.tsx
import "./topicPage.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Topic from "../../components/Topic/Topic";
import Search from "../../components/Search/Search";
import AddQuesBtn from "../../components/AddQuesBtn/AddQuesBtn";
import SortDropDown from "../../components/SortDropDown/Sort";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

interface Discussion {
  slug: string;
  content: string;
  title: string;
  date: string;
  text: string;
  script: string;
  total_comments: number;
  created_at: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

interface TopicPageProps {
  option: string;
}

const TopicPage: React.FC<TopicPageProps> = ({ option }) => {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSortChange = (selectedOption: string) => {
    setLoading(true);

    const api =
      selectedOption === "mostView"
        ? "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/most_commented?limit=10"
        : "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/newest?limit=10";

    fetch(api, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        if (data.success) {
          const formattedTopics = data.discussions.map((discussion: any) => ({
            slug: discussion.slug,
            content: discussion.content,
            title: discussion.title,
            date: discussion.date,
            text: discussion.text,
            script: discussion.script,
            total_comments: discussion.total_comments,
            created_at: discussion.created_at,
            user: discussion.user,
          }));

          setDiscussions(formattedTopics);
        } else {
          console.error("Error fetching data:", data.error);
          alert("Not success");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error fetching data. Check the console for details.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSortChange(option);
  }, [option]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!discussions || discussions.length === 0) {
    return <div>No discussions found.</div>;
  }

  return (
    <>
      <Header />
      <div className="searchBar">
        <span className="header">Welcome to Forum</span>
        <Search />
      </div>

      <div className="SortAndAskQues">
        <div className="sortDropDown">
          <SortDropDown onSortChange={handleSortChange} />
        </div>
        <div className="askQuestion">
          <AddQuesBtn />
        </div>
      </div>

      <div className="topic">
        {discussions.map((discussion) => (
          <NavLink
            key={discussion.slug}
            to={`/forum/${discussion.slug}`}
            className="nav-link"
          >
            <Topic
              key={discussion.slug}
              option={option}
              title={discussion.title}
              date={discussion.date}
              text={discussion.text}
              script={discussion.script}
              content={discussion.content}
            />
          </NavLink>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default TopicPage;
