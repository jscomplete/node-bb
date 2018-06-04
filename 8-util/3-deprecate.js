// $ node 8-util/3-deprecate.js

const util = require("util");

module.exports.puts = util.deprecate(function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + "\n");
  }
}, "puts: Use console.log instead");
