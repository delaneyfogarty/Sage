import React, { useEffect, useState } from 'react';
import { getStoryReader, updateProfile } from './services/supabase';

export default function ProfilePage() {
  const [formName, setFormName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [reader, setReader] = useState('');

  useEffect(() => {
    async function fetch() {
      const data = await getStoryReader();
      setReader(data);
    }
    fetch();
  }, []);

  async function handleSubmitName(e) {
    e.preventDefault();
    await updateProfile({
      name: formName,
    });
  }

  async function handleSubmitAvatar(e) {
    e.preventDefault();
    await updateProfile({
      avatar: avatar,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmitName}>
        <label>
          Name:
          <input value={formName} onChange={(e) => setFormName(e.target.value)}>
            {' '}
          </input>
        </label>
      </form>

      <form onSubmit={handleSubmitAvatar}>
        <label>
          {' '}
          Pick Your Emoji
          <select>
            <option value="🐌"> snail </option>
            <option value="🧞">genie </option>
            <option value="🧝‍♂️">elf </option>
            <option value="🧚">fairy</option>
            <option value="🦖">dinosaur</option>
          </select>
        </label>
      </form>

      <button> Submit Profile</button>
    </div>
  );
}
