import { client } from './client';

export async function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response;
}

export async function logout() {
  await client.auth.signOut();
  return (window.location.href = '../');
}

export async function getStoryById(id) {
  const response = await client.from('stories').select('*').match({ id });
  return response;
}
