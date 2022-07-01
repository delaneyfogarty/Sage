const fetch = require('node-fetch');
// const { getStoryById } = require('../src/services/supabase');
require('dotenv').config();

exports.handler = async (event, context) => {
  const encodedParams = new URLSearchParams();
  // nice work puzzling through all of this! it's very impressive that y'all could wrangle your way through a new and poorly-documented API. great work!
  encodedParams.append('content', event.queryStringParameters.content);
  encodedParams.append('response_type', 'html');
  encodedParams.append('request_type', 'html');
  encodedParams.append('fixation', '1');
  encodedParams.append('saccade', '10');

  const key = process.env.SUPREME_KEY; // does this need to be a tempalte literal for some reason?

  const options = {
    // a post request! nice :)
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com',
      'X-RapidAPI-Key': key,
    },
    body: encodedParams,
  };

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  };

  // async function doesItWork() {
  //   const newStory = await getStoryById(1);

  //   return newStory;
  // }
  // console.log(doesItWork(), 'here');

  try {
    const response = await fetch(`https://bionic-reading1.p.rapidapi.com/convert`, options);
    console.log(response, 'response');
    const data = await response.text();
    const text = JSON.stringify(data);

    return {
      statusCode: 200,
      headers,
      body: text,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
