import React, { useEffect, useState } from "react";
import LongBlog from "../LongBlog/Blog";

interface Blog {
  id: number;
  title: string;
  body: string;
  img: string;
  date: string;
  url: string;
}

interface ListBlogProps {
  option: string;
}

const ListBlog: React.FC<ListBlogProps> = ({ option }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const api =
    option === "mostView"
      ? "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/posts/most_viewed?limit=10"
      : "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/posts/newest?limit=10";

  useEffect(() => {
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
        if (data.success) {
          const formattedBlogs = data.posts.map((post: any) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            img: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
            date: post.created_at,
            url: `/article/${post.slug}`,
          }));

          setBlogs(formattedBlogs);
        } else {
          console.error("Error fetching MostView Blog data:", data.error);
          alert("Not success");
        }
      })
      .catch((error) => {
        console.error("Error fetching MostView Blog data:", error);
        alert("error");
      });
  }, []);

  if (!blogs || blogs.length === 0) {
    return <div>Loading...</div>; // You can replace this with a loading state or an error message
  }

  return (
    <div className="listBlog">
      {Array.from({ length: 10 }).map((_, i) => (
        <LongBlog
          key={i}
          id={blogs[i % blogs.length].id}
          title={blogs[i % blogs.length].title}
          body={blogs[i % blogs.length].body}
          url={blogs[i % blogs.length].url}
          date={blogs[i % blogs.length].date}
          img={blogs[i % blogs.length].img}
        />
      ))}
    </div>
  );
};

export default ListBlog;
