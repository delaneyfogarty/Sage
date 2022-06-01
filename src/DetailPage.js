import React, { useEffect, useState } from 'react';
import { getStoryById } from './services/supabase';
import { useParams } from 'react-router-dom';
import { convertText } from './services/fetch-utils';

export default function DetailPage() {
  const [story, setStory] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const storyData = await getStoryById(params.id);
      const convertedStory = await convertText(storyData.story_text);
      setStory(convertedStory);
    }

    fetch();
  }, [params.id]);

  function handleStoryClick() {
    window.location.href = `${story.link}`;
  }

  return (
    <div className="story-data">
      <div dangerouslySetInnerHTML={{ __html: story }} />

      <div className="story-detail" onClick={handleStoryClick}>
        <h2>{story.title}</h2>
        <h3>by {story.author}</h3>
        <p>{story.story_text}</p>
        <img className="story-images" src={`./images/${story.title}.png`} />
      </div>
    </div>
  );
}

// // call text located in supabase
// //
// const [books, setBooks] = useState([]);
//   console.log('books', books);
//   /*
//   const story = await getStoryById(storyId)

//   First use effect to call fetch function
//   */

// useEffect(() => {
//     async function fetch() {
//       const story = await getAllStories();
//       const convertedStory = await convertText(story[0].story_text);
//       console.log(convertedStory, 'converted Story');
//       setBooks(convertedStory);
//     }
//     fetch();
//   }, []);

// <div className="App">
// <div dangerouslySetInnerHTML={{ __html: books }} />

// {/* {books.map((book, i) => (
// <>
//   <div key={book + i} book={book} />
//   <h2>{book.title}</h2>
//   <p>{book.story_text}</p>
// </>
// ))} */}
