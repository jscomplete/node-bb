// $ node 2-conc/4-order.js

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

// प्रथम
withTime.on("data", data => {
  console.log(`Length: ${data.length}`);
});

// दूसरा
withTime.on("data", data => {
  console.log(`Charaters: ${data.toString().length}`);
});

withTime.execute(fs.readFile, __filename);

/*
withTime.prependLister
withTime.off ...
add/remove Listener
*/
