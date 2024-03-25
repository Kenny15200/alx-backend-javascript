#!/usr/bin/node

function getResponseFromAPI() {
  return new Promise((resolve) => { // Remove 'reject' parameter as it's not used
    // As per the task description, we are not making any actual API calls.
    // We can resolve with a simple dummy response.
    const response = {
      status: 200,
      body: 'dummy-response',
    };
    resolve(response);
  });
}

export default getResponseFromAPI;
