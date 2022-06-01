import React from 'react';
import { Link } from 'react-router-dom';
import { addToLibrary, deleteFromLibrary } from './services/supabase';

export default function StoryCard({ title, author, id }) {
  async function handleClick() {
    // const libraryItem = await addToLibrary(id);
    await addToLibrary(id);
  }
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="story-card">
          <p className="story-title"> {title} </p>
          <img className="story-images" src={`./images/${title}.png`} />
          <p className="story-author"> By {author} </p>
        </div>
      </Link>
      <div>
        <button onClick={handleClick}> Add to Library </button>
      </div>
    </>
  );
}

// need to link line 9 to supabase for images
