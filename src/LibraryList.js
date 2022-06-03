import React from 'react';
import LibraryBook from './LibraryBook';
import backgroundImg from '../src/jungle.png';

export default function LibraryList({ library, fetchFavorites, handleDelete, updatedLibrary, setUpdatedLibrary }) {
  return (
    <div className="library-list" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {library.map((libraryBook) => (
        <LibraryBook
          key={libraryBook.title}
          title={libraryBook.title}
          author={libraryBook.author}
          id={libraryBook.id}
          fetchFavorites={fetchFavorites}
          is_read={libraryBook.is_read}
          image={libraryBook.image}
          handleDelete={handleDelete}
          updatedLibrary={updatedLibrary}
          setUpdatedLibrary={setUpdatedLibrary}
        />
      ))}
    </div>
  );
}
