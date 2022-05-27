export async function convertText(story) {
  const storyRequest = await fetch(`/.netlify/functions/supreme?content=${story}`);
  const data = await storyRequest.json();
  console.log(data);
  return data;
}
