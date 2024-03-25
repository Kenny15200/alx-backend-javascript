#!/usr/bin/node

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // I can resolve with a simple dummy response.
    const response = { status: 200, body: 'dummy-response' };
    resolve(response);
  });
}

export default getResponseFromAPI;

