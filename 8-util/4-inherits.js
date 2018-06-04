// $ node 8-util/4-inherits.js

const util = require("util");
const EventEmitter = require("events");

// ***** The OLD way
function CustomEmitter() {}

util.inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.write = function(data) {
  this.emit("data", data);
};
// *****

// ***** The NEW way
class CustomEmitter extends EventEmitter {
  constructor() {
    super();
  }
  write(data) {
    this.emit("data", data);
  }
}
// *****

const stream = new CustomEmitter();
