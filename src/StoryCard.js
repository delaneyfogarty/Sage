import React, { useState } from 'react';
import { readStory } from './services/supabase';
import { Link } from 'react-router-dom';
import { addToLibrary, deleteFromLibrary } from './services/supabase';


export default function StoryCard({ title, author, id }) {
  // const { id } = useParams();
  const [isRead, setIsRead] = useState(false);

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
    
  async function handleReadBook() {
    await readStory(id, isRead);
    setIsRead(true);
  }
    
  async function handleUnreadBook() {
    await readStory(id, isRead);
    setIsRead(false);
  }
  
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="story-card">
          <p className="story-title"> {title} </p>
          <img className="story-images" src={`./images/${title}.png`} />
          <p className="story-author"> By {author} </p>
        </div>
      </Link>
      <div>
        <button onClick={handleAddClick}> Add to Library </button>
        <button onClick={handleDeleteClick}> Delete from Library </button>
        <div>
          <div>
            {isRead ? '✅' : '📚'}
          </div>
          <button onClick={handleReadBook}>I read this book!</button>
          <button onClick={handleUnreadBook}>Unread book</button>
        </div>
      </div>
    </>
  );
}

// need to link line 9 to supabase for images
