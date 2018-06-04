// $ node 2-conc/1-cb.js

const fs = require("fs");

const readFileAsArray = function(file, cb) {
  fs.readFile(file, function(err, data) {
    if (err) {
      return cb(err);
    }

    const lines = data
      .toString()
      .trim()
      .split("\n");
    cb(null, lines);
  });
};

// Example Call:
const testFile = path.join(__dirname, "numbers");
readFileAsArray(testFile, (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log("odd numbers count:", oddNumbers.length);
});

/*
promisify
async/await
*/
