// $ node 8-util/2-console.js

const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

const console2 = new console.Console(out, err);

setInterval(function() {
  console2.log(new Date());
  console2.error(new Error("Whoops"));
}, 5000);
