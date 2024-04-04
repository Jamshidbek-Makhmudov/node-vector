const crypto = require('crypto');
const { performance } = require('perf_hooks');

// const { now } = performance;

// Example 1

// const start = now();
// crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
// console.log(now() - start, "Password encrypted");




// Example 2

// const size = 8;

// process.env.UV_THREADPOOL_SIZE = size;

// const start = now();
// for(let i = 1; i <= size; i++) {
//     crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
//         const duration = now() - start;
//         console.log(duration, `Password encrypted ${i}`);
//     });
// }




// 4 - avg: 500
// 8 - avg: 750
// 16 - avg: 1350


// Example with avg time
const size = 128;
process.env.UV_THREADPOOL_SIZE = size;

const result = [];
const start = now();

for(let i = 1; i <= size; i++) {
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
        const duration = now() - start;
        console.log(duration, `Password encrypted ${i}`);
        result.push(duration);
    });

}

setTimeout(() => {
    const avg = (result.reduce((prev, curr) => prev + curr)) / size;
    console.log('Avg time: ', avg);

}, 10000);

