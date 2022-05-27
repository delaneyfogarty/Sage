export async function convertText(story) {
  const storyRequest = await fetch(`/.netlify/functions/supreme?context=${story}`);
  const data = await storyRequest.json();
  return data;
}
