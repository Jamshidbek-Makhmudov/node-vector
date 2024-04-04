// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 1000000000; i++) {}

/** Experiment 9 - I/O events are polled and callbacks are added only after I/O is complete */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) {}

/** Experiment 10 - Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed  */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}

/** Experiment 11 - Microtask queues callbacks are executed after I/O callbacks and before check queue callbacks  */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() => console.log("this is inner process.nextTick inside readFile"));
//   Promise.resolve().then(() => console.log("this is inner Promise.resolve inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}

/** Experiment 12 - Microtask queues callbacks are executed inbetween check queue callbacks  */

// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() => console.log("this is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));

/** Experiment 13 - Timer anamoly. Order of execution can never be guaranteed */

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));
// Uncomment below to guarantee order
// for (let i = 0; i < 1000000000; i++) {}

/** Experiment 14 - Close queue callbacks are executed after all other queues callbacks  */

// const fs = require("fs");

// const readableStream = fs.createReadStream(__filename);
// readableStream.close();

// readableStream.on("close", () => {
//   console.log("this is from readableStream close event callback");
// });
// setImmediate(() => console.log("this is setImmediate 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));