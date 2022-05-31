import { client } from './client';

export async function getUser() {
  return client.auth.session();
}

// export async function signUpUser(email, password) {
//   const response = await client.auth.signUp({ email, password });
//   return response;
// }

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  //if (error) return error;

  return response.user;
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
  const response = await client.from('story_readers_two').match({ id });
  return response;
}

export async function createProfile(reader) {
  const response = await client.from('story_readers_two').insert({
    name: reader.name,
    avatar: reader.avatar,
    email: reader.email,
    user_id: reader.user_id,
  });
  return response.data;
}

export async function updateProfile(id, reader) {
  const response = await client.from('story_readers_two').update(reader).match({ id });
  return response;
}
