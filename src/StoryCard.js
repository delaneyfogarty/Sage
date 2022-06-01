import React from 'react';
import { Link } from 'react-router-dom';

export default function StoryCard({ title, author, id }) {
  return (
    <Link to={`/detail/${id}`}> 
      <div className='story-card'>
        <p className='story-title'> {title} </p>
        <img className='story-images' src={`./images/${title}.png`}/>   
        <p className='story-author'> By {author} </p>
      </div>
    </Link>
  );
}


// need to link line 9 to supabase for images