/**
 * Creates an HTTP server that responds with a 'Hello Holberton School!' message.
 */

// Import the 'http' module to create an HTTP server
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server using the 'http.createServer' method
const app = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK)
  res.statusCode = 200;

  // Set the HTTP response header 'Content-Type' to 'text/plain'
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body with the message 'Hello Holberton School!'
  res.end('Hello Holberton School!');
});

// Start the server and listen for incoming connections
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
