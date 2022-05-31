import { client } from './client';

export async function getUser() {
  return client.auth.session();
}

// export async function signUpUser(email, password) {
//   const response = await client.auth.signUp({ email, password });
//   return response;
// }

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });

  if (error) return error;

  return user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  return (window.location.href = '../');
}

export async function getStoryById(id) {
  const response = await client.from('stories').select('*').match({ id });
  return response.data;
}

export async function getAllStories() {
  const response = await client.from('stories').select('*');
  return response.data;
}

export async function getStoryReader(id) {
  const response = await client.from('story_readers').match({ id });
  return response.data;
}

export async function updateProfile(id, reader) {
  const response = await client.from('story_readers').update(reader).match({ id });
  return response.data;
}
