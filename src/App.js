import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getStoryById, getAllStories } from './services/supabase';
import { convertText } from './services/fetch-utils';

function App() {
  const [books, setBooks] = useState([]);

  /* 
  const story = await getStoryById(storyId)

  First use effect to call fetch function 
  */

  useEffect(() => {
    async function fetch() {
      const story = await getAllStories();
      const convertedStory = await convertText(story[0].story_text);
      setBooks(convertedStory);
    }
    fetch();
  }, []);

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: books }} />

      {/* {books.map((book, i) => ( }
          <>
            <div key={book + i} book={book} />
            <h2>{book.title}</h2>
            <p>{book.story_text}</p>
          </>
        ))} */}
    </div>
  );
}

export default App;
