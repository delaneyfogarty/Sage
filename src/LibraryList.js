import React from 'react';
import LibraryBook from './LibraryBook';
import backgroundImg from '../src/clouds.png';

export default function LibraryList({
  library,
  fetchFavorites,
  handleDelete,
  updatedLibrary,
  setUpdatedLibrary,
}) {
  return (
    <div className="story-list" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {library.map(({libraryBook}) => (
        <LibraryBook
          key={libraryBook.title}
          // seems like a job for the spread operator! 
          // this will pass all the keys down as props
          {...libraryBook}
        />
      ))}
    </div>
  );
}
