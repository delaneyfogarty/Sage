import React from 'react';
import StoryCard from './StoryCard';
import backgroundImg from './jungle.png';

export default function StoryList({ stories }) {
  // console.log(stories);
  return (
    <main className="story-list" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {stories.map((StoryCardEl) => (
        <StoryCard
          key={StoryCardEl.title}
          title={StoryCardEl.title}
          author={StoryCardEl.author}
          image={StoryCardEl.image}
          id={StoryCardEl.id}
        />
      ))}
      {''}
    </main>
  );
}
