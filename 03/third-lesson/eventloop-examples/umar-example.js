const fs = require('fs');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

const { now } = performance;

const start = now();

fs.readFile(__filename, async () => {
    const duration = now() - start;
    console.log(duration, `file read`);

    console.log('file1');
    setTimeout(() => {
        console.log('setTimeout fs');
    }, 0);
    setImmediate(() => {
        console.log('setImmediate');
    });
    crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");

});


setTimeout(() => {
    console.log('setTimeout 1');
}, 2);
