import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { readStory, unReadStory, deleteFromLibrary } from './services/supabase';

export default function LibraryBook({ fetchFavorites, title, author, id, image, updatedLibrary, setUpdatedLibrary }) {
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

  async function handleReadBook() {
    // setIsRead(true);
    await readStory(id);
    setIsRead(true);
    setUpdatedLibrary(!updatedLibrary);  
  }
    
  async function handleUnreadBook() {
    // setIsRead(false);
    await unReadStory(id);
    setIsRead(false);
    setUpdatedLibrary(!updatedLibrary);  
  }

  return (
    <div className="book">
      <Link to={`/detail/${id}`}>
        <div onClick={handleClick}>
          <h2> {isRead ? '✅' : '📚'} </h2>
          <h1 className="story-title"> {title} </h1>
          <img className="story-images" src={image} />
          <p className="story-author"> By {author} </p>
        </div>
      </Link>
      <button onClick={handleDeleteClick} className="button-54" role="button">
        {' '}
        Delete from Library{' '}
      </button>
      <div>
        <div>
          {isRead ? '✅' : '📚'}
        </div>
        <button onClick={handleReadBook}>I read this book!</button>
        <button onClick={handleUnreadBook}>Unread book</button>
      </div>
    </div>
  );
}
