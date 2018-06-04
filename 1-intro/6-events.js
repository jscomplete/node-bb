// $ node 1-intro/6-events.js

process.on("exit", code => {
  // do one final synchronous operation
  // before the node process terminates
});

/*
the process object is an event emitter

Docs: https://nodejs.org/api/process.html

*/
