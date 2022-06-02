import React from 'react';
import { Link } from 'react-router-dom';
import { readStory, deleteFromLibrary } from './services/supabase';

export default function LibraryBook({ fetchFavorites, title, author, id, is_read, image }) {
  async function handleClick() {
    await readStory(id);
    await fetchFavorites();
  }

  async function handleDeleteClick() {
    // const libraryItem = await addToLibrary(id);
    await deleteFromLibrary(id);
    await fetchFavorites();
  }

  return (
    <div className="book">
      <Link to={`/detail/${id}`}>
        <div onClick={handleClick}>
          <h2> {is_read ? '✅' : '📚'} </h2>
          <h1 className="story-title"> {title} </h1>
          <img className="story-images" src={image} />
          <p className="story-author"> By {author} </p>
        </div>
      </Link>
      <button onClick={handleDeleteClick} className="button-54" role="button">
        {' '}
        Delete from Library{' '}
      </button>
    </div>
  );
}
