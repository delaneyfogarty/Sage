import React from 'react';
import { useEffect, useState } from 'react';
// import Home from './Home';

import { deleteFromLibrary } from './services/supabase';
import LibraryList from './LibraryList';
import { getLibraryBooks } from './services/supabase';

export default function Library() {
  const [library, setLibrary] = useState([]);
  // const [updatedLibrary, setUpdatedLibrary] = useState([]);

  async function handleDelete(id) {
    await deleteFromLibrary(id);
  }

  async function fetchFavorites() {
    const myFavorites = await getLibraryBooks();
    const filteredFavorites = myFavorites.map((book) => {
      return {
        title: book.stories.title,
        author: book.stories.author,
        id: book.stories.id,
        image: book.stories.image,
      };
    });
    setLibrary(filteredFavorites);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  // async function handleClick() {

  //   const deletedStory = await deleteFromLibrary(id);

  //   setUpdatedLibrary(deletedStory);

  // }
  return (
    <div>
      <h2>My Library</h2>
      <LibraryList library={library} fetchFavorites={fetchFavorites} handleDelete={handleDelete} />
    </div>
  );
}
