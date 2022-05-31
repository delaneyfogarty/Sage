import React, { useState } from 'react';
import { createProfile } from './services/supabase';

export default function ProfilePage() {
  const [formName, setFormName] = useState('');
  const [avatar, setAvatar] = useState('');

  async function handleCreateProfile(e) {
    console.log('function call');
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
        <label>
          Name:
          <input value={formName} onChange={(e) => setFormName(e.target.value)} />
        </label>
        <label>
          Pick Your Emoji
          <select onChange={(e) => setAvatar(e.target.value)}>
            <option value="🐌">snail</option>
            <option value="🧞">genie </option>
            <option value="🧝‍♂️">elf </option>
            <option value="🧚">fairy</option>
            <option value="🦖">dinosaur</option>
          </select>
        </label>
        <button>Submit Profile</button>
        <div>
          <p>{avatar}</p>
          <p>{formName}</p>
        </div>
      </form>
    </div>
  );
}
