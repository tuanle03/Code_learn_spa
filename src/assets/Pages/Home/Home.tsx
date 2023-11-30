import { useState } from "react";
import Header from "../../../components/Header/Header";
import SortDropDown from "../../../components/SortDropDown/Sort";
import LongBlog from "../../../components/LongBlog/Blog";
import Footer from "../../../components/Footer/Footer";
import Search from "../../../components/Search/Search";
import MostView from "../../../components/MostView/MostView";
import './home.css'
<link
  rel="stylesheet"
  href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
></link>;

const Home = () => {
  const exampleBlogs = [
    {
      title: "Blog 1",
      date: new Date(),
      script: "This is the content of Blog 1",
      img: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    },
    {
      title: "Blog 2",
      date: new Date(),
      script: "This is the content of Blog 2",
      img: "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",
    },
    {
      title: "Blog 3",
      date: new Date(),
      script: "This is the content of Blog 3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyH7xHTNGMrmPId1MxO0aDUNpc8mHKZxJLiAtT7nXoawocyp3XwG77nvt1DP4tbnS5tIw&usqp=CAU",
    },
  ];
  return (
    <div className="Home">
      <div className="Top">
        <Header signIn={false} username="Huỳnh Bông" avatar="" />
        <Search />
        <MostView blogs={exampleBlogs} />
        <SortDropDown />
      </div>
      <LongBlog
        title="Some blog"
        date={new Date(2023, 10, 4)}
        script="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
      />
      <LongBlog
        title="Some blog"
        date={new Date(2023, 10, 4)}
        script="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
      />
      <LongBlog
        title="Some blog"
        date={new Date(2023, 10, 4)}
        script="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
      />
      <LongBlog
        title="Some blog"
        date={new Date(2023, 10, 4)}
        script="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
      />
      <LongBlog
        title="Some blog"
        date={new Date(2023, 10, 4)}
        script="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
      />

      <Footer />
    </div>
  );
};

export default Home;
