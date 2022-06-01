// import React from 'react';

import React, { useState } from 'react';
import { updateProfile } from './services/supabase';

export default function UpdateProfilePage({ formName, avatar }) {
  const [updatedFormName, setUpdatedFormName] = useState('');
  const [updatedAvatar, setUpdatedAvatar] = useState('');

  async function handleUpdateProfile(e) {
    e.preventDefault();
    await updateProfile({
      name: updatedFormName,
      avatar: updatedAvatar,
    });
    setUpdatedFormName('');
    setUpdatedAvatar('');
  }

  return (
    <div>
      <form onSubmit={handleUpdateProfile}>
        <label>
          Update Your Profile Name:
          <input value={updatedFormName} onChange={(e) => setUpdatedFormName(e.target.value)} />
        </label>
        <label>
          Update Your Profile Emoji
          <select onChange={(e) => setUpdatedAvatar(e.target.value)}>
            <option>🐌</option>
            <option>🧞</option>
            <option>🧝‍♂️</option>
            <option>🧚</option>
            <option>🦖</option>
          </select>
        </label>
        <button>Update Profile</button>
        <div>
          <p>{avatar}</p>
          <p>{formName}</p>
        </div>
      </form>
    </div>
  );
}
