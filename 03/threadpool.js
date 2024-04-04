const crypto = require('crypto');
const { performance } = require('perf_hooks');

// const start = performance.now(); 
// crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
// console.log(performance.now() - start, "Password encrypted");



const size = 8;

process.env.UV_THREADPOOL_SIZE = size;

const start = performance.now();
for(let i = 1; i <= size; i++) {
    crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
			const duration = performance.now() - start;
        console.log(duration, `Password encrypted ${i}`);
    });
}