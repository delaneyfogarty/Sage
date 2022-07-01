import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { readStory, unReadStory, deleteFromLibrary } from './services/supabase';

export default function LibraryBook({
  fetchFavorites,
  title,
  author,
  id,
  image,
  updatedLibrary,
  setUpdatedLibrary,
}) {
  const [isRead, setIsRead] = useState(false);
  async function handleClick() {
    await readStory(id);
    await fetchFavorites();
  }

  async function handleDeleteClick() {
    // const libraryItem = await addToLibrary(id);
    await deleteFromLibrary(id);
    await fetchFavorites();
  }

  // this prevents duplication, but maybe is less readable? i could go either way
  async function handleReadBook() {
    // setIsRead(true);
    await readStory(id);
    setIsRead(true);
    setUpdatedLibrary(!updatedLibrary);
  }
  return (
    <div className="story-card">
      <Link to={`/detail/${id}`}>
        <div onClick={handleClick}>
          <p> {isRead ? '✅' : '📚'} </p>
          <p className="story-title"> {title} </p>
          <img className="story-pics" src={image} />
          <p className="story-author"> By {author} </p>
        </div>
      </Link>
      <div>
        <button onClick={handleDeleteClick} className="button-54" role="button">
          {' '}
          Delete from Library{' '}
        </button>
        <div>
          <button onClick={() => handleReadBook(true)} className="button-54" role="button">
            I finished it!
          </button>
          <button onClick={() => handleReadBook(false)} className="button-54" role="button">
            Need to read!
          </button>
        </div>
      </div>
    </div>
  );
}
