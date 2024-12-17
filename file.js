const fs = require('fs');

// Data to write
const data = "Hello, this is another sample text push example!";

// Write to a file (creates a file if it doesn't exist, or overwrites it)
fs.writeFile('sample2.txt', data, (err) => {
  if (err) {
    console.log("Error writing to file", err);
  } else {
    console.log("File written successfully!");
  }
});
