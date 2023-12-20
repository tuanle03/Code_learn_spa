import React, { useState } from 'react';
import SortDropDown from '../../components/SortDropDown/Sort';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import MostView from '../../components/MostView/MostView';
import Header from '../../components/Header/Header';
import ChatGPT from '../../components/chatGPT/ChatGPT';
import './home.css';
import ListBlog from '../../components/ListBlog/ListBlog';

const Home = () => {
  const [currentSortOption, setCurrentSortOption] = useState('mostView');

  const handleSortChange = (option: string) => {
    setCurrentSortOption(option);
  };

  return (
    <div className='Home'>
      <div className='Top'>
        <Header />
        <Search />
        <MostView />
        <SortDropDown onSortChange={handleSortChange} />
      </div>
      <ListBlog key={currentSortOption} option={currentSortOption} />

      <ChatGPT />
      <Footer />
    </div>
  );
};

export default Home;
