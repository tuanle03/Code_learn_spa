import React from 'react'
import './blog.css'

interface Blog {
  id: number;
  title: string;
  body: string;
  img: string;
  date: string; 
  url: string;
}

const LongBlog = ({id, title, body, img, date, url}: Blog) => {
  const maxLength = 200;
  let text = '';
  if (body.length < maxLength){
    text = body;
  } else{
    text = body.substring(0, maxLength);
  }
  date = date.substring(0, 9);
  return (
    <a className='LongBlog' href={url}>
      <img className='img' src={img} alt="" />
      <div className='content'>
        <div className='header'>
          <h3 className='title'>{title}</h3>
          <p className='date'>{date}</p>
        </div>
        <p className='text'>{text}...</p>
        <div className='see_more' >See more</div>
      </div>
    </a>
  )
}

export default LongBlog
