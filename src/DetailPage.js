import React, { useEffect, useState } from 'react';
import { getStoryById } from './services/supabase';
import { useParams } from 'react-router-dom';
import { convertText } from './services/fetch-utils';

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
    <div className="story-data">
      <h2 onClick={handleCovertClick}>{story.title}</h2>
      {loadedStory ? (
        <>
          <div dangerouslySetInnerHTML={{ __html: loadedStory }} />
        </>
      ) : (
        <p>{story.story_text}</p>
      )}
      <h3>by {story.author}</h3>
      <img className="story-images" src={story.image} />
    </div>
  );
}
