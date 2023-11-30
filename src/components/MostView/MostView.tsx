import React, { useState } from 'react';
import Blog from '../ShortBlog/Blog';
import './mostView.css';

interface MostViewProps {
  blogs: {
    title: string;
    date: Date;
    script: string;
    img: string;
  }[];
}

const MostView: React.FC<MostViewProps> = ({ blogs }) => {
  const [index, setIndex] = useState(0);

  const changeBlog = (newIndex: number) => {
    setIndex(newIndex);
  };

  const nextBlog = () => {
    setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevBlog = () => {
    setIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className='MostView'>
      <h1>Most view</h1>
      <div className='laptopBlogs'>
        <Blog title={blogs[0].title} date={blogs[0].date} script={blogs[0].script} img={blogs[0].img} />
        <Blog title={blogs[1].title} date={blogs[1].date} script={blogs[1].script} img={blogs[1].img} />
        <Blog title={blogs[2].title} date={blogs[2].date} script={blogs[2].script} img={blogs[2].img} />
      </div>
      <div className='mobileBlogs'>
        {blogs.map((blog, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => changeBlog(i)}
          ></span>
        ))}
        <Blog title={blogs[index].title} date={blogs[index].date} script={blogs[index].script} img={blogs[index].img} />
        <div className='arrow'>
          <div className='prev' onClick={prevBlog}>{'<'}</div>
          <div className='next' onClick={nextBlog}>{'>'}</div>
        </div>
      </div>
    </div>
  );
};

export default MostView;
