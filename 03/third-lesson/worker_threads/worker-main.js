const { Worker, isMainThread, parentPort } = require('node:worker_threads');

const worker = new Worker('/home/husniddin/Desktop/unicon/node-core/third-lesson/worker_threads/worker-code.js');
//   setEnvironmentData('')
worker.once('message', (message) => {
    console.log('Got message');  // Prints 'Hello, world!'.
    // console.log(message);  // Prints 'Hello, world!'.
});

console.log('first prints');