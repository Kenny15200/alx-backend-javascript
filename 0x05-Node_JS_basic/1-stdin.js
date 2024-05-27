// Import the readline module to read input from the command line
const readline = require('readline');

// Create an interface to read input from stdin and output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Display the initial message
console.log('Welcome to Holberton School, what is your name?');
// Listen for input from the user
rl.on('line', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);	
  // Close the readline interface
  rl.close();
});

// When the interface is closed, display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
});
