import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getStoryById } from './services/supabase';
import Book from './Book';

function App() {
  const [book, setBook] = useState('');

  /* 
  const story = await getStoryById(storyId)

  First use effect to call fetch function 
  */

  useEffect(() => {
    async function fetch() {
      const story = await getStoryById(1);
      console.log(story);
      setBook(story);
    }
    fetch();
  }, [book]);

  return (
    <div className="App">
      <Book book={book} />
    </div>
  );
}

export default App;
