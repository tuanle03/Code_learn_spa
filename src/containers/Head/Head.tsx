import React from 'react';
import './head.css';
import MostView from '../../components/MostView/MostView';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

interface TopProps {
  signIn: boolean;
  avatar: string;
  username: string;
}

const Top: React.FC<TopProps> = ({ signIn, avatar, username }) => {
  const exampleBlogs = [
    {
      title: 'Blog 1',
      date: new Date(),
      script: 'This is the content of Blog 1',
      img: 'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
    },
    {
      title: 'Blog 2',
      date: new Date(),
      script: 'This is the content of Blog 2',
      img: 'https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg',
    },
    {
      title: 'Blog 3',
      date: new Date(),
      script: 'This is the content of Blog 3',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyH7xHTNGMrmPId1MxO0aDUNpc8mHKZxJLiAtT7nXoawocyp3XwG77nvt1DP4tbnS5tIw&usqp=CAU',
    },
  ];

  return (
    <div className='Top'>
      <Header signIn = {signIn} avatar = {avatar} username= {username} />
      <Search/>
      <MostView blogs={exampleBlogs} />
    </div>
  );
};

export default Top;
