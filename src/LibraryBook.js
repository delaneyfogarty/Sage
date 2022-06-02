import React from 'react';
import { Link } from 'react-router-dom';
import { readStory } from './services/supabase';

export default function LibraryBook({ fetchFavorites, title, author, id, is_read }) {
  async function handleClick() {
    await readStory(id);
    await fetchFavorites();
  }
  return (
    <div className="book">
      <Link to={`/detail/${id}`}>
        <div onClick={handleClick}>
          <h2> {is_read ? '✅' : '📚'} </h2>
          <h1 className="story-title"> {title} </h1>
          <img className="story-images" src={`./images/${title}.png`} />
          <p className="story-author"> By {author} </p>
        </div>
      </Link>
    </div>
  );
}
