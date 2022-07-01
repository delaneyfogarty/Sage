// i think this component is unused, was replaced by LibraryBook.js? It's worth deleting unused files to prevent confusion for future devs

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { readStory } from './services/supabase';

export default function ReadBook() {
  const { id } = useParams();
  const [isRead, setIsRead] = useState(false);
  
  async function handleReadBook() {
    await readStory(id, isRead);
    setIsRead(true);
  }
  
  async function handleUnreadBook() {
    await readStory(id, isRead);
    setIsRead(false);
  }
  
  return (
  
    <div>
      <div>
        {isRead ? '✅' : '📚'}
      </div>
      <button onClick={handleReadBook}>I read this book!</button>
      <button onClick={handleUnreadBook}>Unread book</button>
    </div>
  );
}
  
