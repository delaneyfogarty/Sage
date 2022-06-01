import React from 'react';
import LibraryBook from './LibraryBook';

export default function LibraryList({ library, fetchFavorites }) {
  return (
    <div>
      {library.map((libraryBook) => (
        <LibraryBook
          key={libraryBook.title}
          title={libraryBook.title}
          author={libraryBook.author}
          id={libraryBook.id}
          fetchFavorites={fetchFavorites}
          is_read={libraryBook.is_read}
        />
      ))}
    </div>
  );
}
