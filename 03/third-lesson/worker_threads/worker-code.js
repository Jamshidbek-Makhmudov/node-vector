const { isMainThread, parentPort } = require('node:worker_threads');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

const { now } = performance;
// When a message from the parent thread is received, send it back:



const start = now();
const result = crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
console.log(now() - start, "Password encrypted");

parentPort.postMessage(result.toString());

