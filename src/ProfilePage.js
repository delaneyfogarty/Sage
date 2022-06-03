import React, { useState } from 'react';
import { createProfile } from './services/supabase';
import backgroundImg from '../src/clouds.png';
import { useHistory } from 'react-router-dom';

export default function ProfilePage() {
  const [formName, setFormName] = useState('');
  const [avatar, setAvatar] = useState('🐌');
  let history = useHistory();

  async function handleCreateProfile(e) {
    e.preventDefault();

    await createProfile({
      name: formName,
      avatar: avatar,
    });
    setFormName('');
    setAvatar('');
    history.push('/home');
  }

  return (
    <div className="profile-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div>
        <div className="instructions">
          <p>
            <h1> Welcome to Sage! </h1> <br></br> We are so glad you are here. <br></br>
            <br></br> We know that reading with Dyslexia can be hard, but that you are up for the
            challenge! Sage is here to help your brain decode words with ease. It is time to enter a
            captivating world of stories. <br></br>
            <br></br>To get started, first create your own top secret code and choose your favorite
            character. These are the keys to unlock your very own library. <br></br>
            <br></br> Next, select the most magical books to add to your personal library. Choose as
            many as you want, the options are endless! When you are ready to read, just click on the
            book and the words will transform before your eyes. <br></br>
            <br></br>Now buckle up, and get prepared to be transported to an enchanted world beyond
            your wildest imagination.
          </p>
        </div>
        <form onSubmit={handleCreateProfile}>
          <div className="profile-inputs">
            <label className="secret-label">
              Create Your Secret Key:
              <input value={formName} onChange={(e) => setFormName(e.target.value)} />
            </label>
            <label>
              Pick Your Favorite Character
              <select onChange={(e) => setAvatar(e.target.value)}>
                <option>🐌</option>
                <option>🧞</option>
                <option>🧝‍♂️</option>
                <option>🧚</option>
                <option>🦖</option>
              </select>
            </label>
            <button className="button-54" role="button">
              Unlock Your Stories
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
