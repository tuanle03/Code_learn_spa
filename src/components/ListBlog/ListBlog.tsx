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
        'Accept': "application/json",
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
            img: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/412912321_375065851718828_6609954758195566548_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QLdIC7FBavcAX-msFgT&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAX5YvnTUvUDmazRTtZv_xQ774Pgb2y7f4Oz3BZGEmR5g&oe=65873C4A",
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
