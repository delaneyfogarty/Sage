import React, { useEffect, useState } from 'react';
import { getStoryById } from './services/supabase';
import { useParams } from 'react-router-dom';
import { convertText } from './services/fetch-utils';
import bookImg from '../src/book.png';

export default function DetailPage() {
  const [story, setStory] = useState({});
  const [loadedStory, setLoadedStory] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const storyData = await getStoryById(params.id);
      setStory(storyData);
    }

    fetch();
  }, [params.id]);

  async function handleCovertClick() {
    const convertedStory = await convertText(story.story_text);
    setLoadedStory(convertedStory);
  }

  return (
    <div className="story-data" style={{ backgroundImage: `url(${bookImg})` }}>
      <div className="story-stuff">
        <h2>{story.title}</h2>
        <h3>by {story.author}</h3>
        <img className="story-images" src={story.image} />
        <br></br>
        <button className="button-54" role="button" onClick={handleCovertClick}>
          Convert Text
        </button>
        {loadedStory ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: loadedStory }} />
          </>
        ) : (
          <p>{story.story_text}</p>
        )}
      </div>
    </div>
  );
}
