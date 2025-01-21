const request = require('request');

const url = 'api-url';
const key = 'api-key';
const method = 'api-method';

const requestUrl = `${url}?key=${encodeURIComponent(key)}&method=${encodeURIComponent(method)}`;

// Send a GET request
request(requestUrl, (error, response, body) => {
  if (error) {
    console.error('Response:', response);
    console.error('Error with request:', error);
    return;
  }

  try {
    const data = JSON.parse(body);
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});