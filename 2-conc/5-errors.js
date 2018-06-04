// $ node 2-conc/5-errors.js

const fs = require("fs");
const EventEmitter = require("events");

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time("execute");
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit("error", err);
      }

      this.emit("data", data);
      console.timeEnd("execute");
    });
  }
}

const withTime = new WithTime();

withTime.on("data", data => {
  console.log(`Length: ${data.length}`);
});

withTime.execute(fs.readFile, "");
withTime.execute(fs.readFile, __filename);

/*

on("error")
uncaughtException

*/
