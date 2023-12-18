import { useState } from "react";
import SortDropDown from "../../components/SortDropDown/Sort";
import LongBlog from "../../components/LongBlog/Blog";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import MostView from "../../components/MostView/MostView";
import './home.css'
import Header from "../../components/Header/Header";
import ChatGPT from "../../components/chatGPT/ChatGPT";
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
        <Header role="" signIn={true} username="Channie" avatar="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/369732690_1677239186083823_1493575485246765486_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF2yKeSvdGeEUNYkv-4WWCYAXhDjOvILeYBeEOM68gt5qjGn53Q9KdPUjiugkoLphz1n1AmMkNo38mg3FWgljVA&_nc_ohc=aKRIntF9qdUAX_3QOfv&_nc_ht=scontent.fhan3-4.fna&oh=00_AfBCsvIRqKMMcoODRBwiTYt5vB7OAb4swNm7yqxuRyIgLA&oe=657EF470" />
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
