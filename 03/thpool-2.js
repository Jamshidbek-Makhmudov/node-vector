const crypto = require("crypto");
const https = require("https");
const http = require("http");

process.env.UV_THREADPOOL_SIZE = 128;

const start = Date.now();
console.log(process.pid)
const MAX_CALLS = 128;

function getAvg(nums) {
    return nums.reduce((prev, curr) => prev + curr) / nums.length;
}

setTimeout(() => {
    console.log('interval')
}, 500);

const res = [];
for (let i = 0; i < MAX_CALLS; i++) {
      crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
      });

    https
        .request("https://www.google.com", (res) => {
            res.on("data", () => { });
            res.on("end", () => {
                console.log(`Request: ${i + 1}`, Date.now() - start);
                res.push(Date.now() - start);
            });
        })
        .end();
}
