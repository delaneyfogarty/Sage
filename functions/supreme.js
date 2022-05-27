const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',

  'content-type': 'application/x-www-form-urlencoded',
  'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com',
  'X-RapidAPI-Key': 'SUPREME_KEY',
};

exports.handler = async (event, context) => {
  try {
    const response = await fetch(
      `https://bionic-reading1.p.rapidapi.com/convert?content=${event.queryStringParameters.story}?response_type=html?request_type=html?fixation=1?saccade=10`,
      { method: 'POST' }
    );
    const data = await response.json();
    const json = JSON.stringify(data);
    //line 14 is because this is how netlify reads our data

    return {
      statusCode: 200,
      headers,
      body: json,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
