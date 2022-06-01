import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home';

import { deleteFromLibrary } from './services/supabase';
import LibraryList from './LibraryList';
import { getLibraryBooks } from './services/supabase';

export default function Library() {
  const [library, setLibrary] = useState([]);
  // const [updatedLibrary, setUpdatedLibrary] = useState([]);

  async function fetchFavorites() {
    const myFavorites = await getLibraryBooks();
    setLibrary(myFavorites);
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
      <LibraryList library={library} fetchFavorites={fetchFavorites} />
    </div>
  );
}
