import React from 'react'
import './blog.css'

interface blogProps{
  title: string;
  date: Date;
  script: string;
  img: string
}

const LongBlog = ({title, date, script, img}: blogProps) => {
  const maxLength = 200;
  let text = '';
  if (script.length < maxLength){
    text = script;
  } else{
    text = script.substring(0, maxLength);
  }
  return (
    <a className='LongBlog'>
      <img className='img' src={img} alt="" />
      <div className='content'>
        <div className='header'>
          <h3 className='title'>{title}</h3>
          <p className='date'>{date.toDateString()}</p>
        </div>
        <p className='text'>{text}...</p>
        <a className='see_more' href={script}>See more</a>
      </div>
    </a>
  )
}

export default LongBlog