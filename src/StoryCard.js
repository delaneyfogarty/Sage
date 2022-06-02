import React from 'react';
import { Link } from 'react-router-dom';
import { addToLibrary, deleteFromLibrary } from './services/supabase';

export default function StoryCard({ title, author, id, image }) {
  //const history = useHistory();
  async function handleAddClick() {
    // const libraryItem = await addToLibrary(id);
    await addToLibrary(id);
    //history.push('./library');
  }

  async function handleDeleteClick() {
    // const libraryItem = await addToLibrary(id);
    await deleteFromLibrary(id);
  }
  return (
    <>
      <div className="story-card">
        <Link to={`/detail/${id}`}>
          <div className="story-card">
            <p className="story-title"> {title} </p>
            <img className="story-images" src={image} />
            <p className="story-author"> By {author} </p>
          </div>
        </Link>
        <div>
          <button onClick={handleAddClick} className="button-54" role="button">
            {' '}
            Add to Library{' '}
          </button>
        </div>
      </div>
    </>
  );
}

// need to link line 9 to supabase for images
