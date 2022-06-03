import React, { useState } from 'react';
import { createProfile } from './services/supabase';

export default function ProfilePage() {
  const [formName, setFormName] = useState('');
  const [avatar, setAvatar] = useState('🐌');

  async function handleCreateProfile(e) {
    e.preventDefault();
    await createProfile({
      name: formName,
      avatar: avatar,
    });
    setFormName('');
    setAvatar('');
  }

  return (
    <div>
      <form onSubmit={handleCreateProfile}>
        <div className="profile-inputs">
          <label>
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

      <div>
        <h2>Instructions</h2>
        <p>Instructions go here</p>
      </div>
    </div>
  );
}
