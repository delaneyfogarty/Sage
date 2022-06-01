import { client, checkError } from './client';

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
  const response = await client.from('stories').select('*').match({ id }).single();
  return checkError(response);
}

export async function getAllStories(page) {
  const numPerPage = 2;
  const start = (page - 1) * numPerPage;
  const response = await client
    .from('stories')
    .select('*', { count: 'exact' })
    .range(start, start + numPerPage - 1);

  const lastPage = Math.ceil(response.count / numPerPage);

  return { ...response, lastPage };
}

export async function addToLibrary(id) {
  const response = await client.from('stories_junction_two').insert({ story_id: id });

  return response.data;
}

//story_reader_id: story_id.story_reader_id,

export async function getLibraryBooks() {
  const response = await client.from('stories_junction_two').select('*');

  return response.data;
}

export async function deleteFromLibrary(id) {
  const response = await client.from('stories_junction_two').delete().match({ id });

  return response.data;
}

export async function readStory(id) {
  const response = await client
    .from('stories_junction_two')
    .update({ is_read: true })
    .match({ id })
    .single();

  return response.data;
}

// export async function getStoryReader(id) {
//   const response = await client.from('story_readers_two').match({ id: id });
//   return response;
// }

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
  const response = await client
    .from('story_readers_two')
    .update({
      name: reader.name,
      avatar: reader.avatar,
      email: reader.email,
      user_id: reader.user_id,
    })
    .match({ id: id });
  return response;
}
