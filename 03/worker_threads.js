const { Worker, isMainThread, parentPort, workerData } = require("node:worker_threads")

function generatePrimes(start, end) {
    const primes = [];

    //Function to check if a number is prime or not
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Generate primes within the range
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const threads = new Set();
const number = 10_000_000;

const breakIntoParts = (number, threadCount = 1) => {
    const parts = [];
    const chunkSize = Math.ceil(number / threadCount);

    for (let i = 0; i < number; i += chunkSize) {
        const end = Math.min(i + chunkSize, number);
        parts.push({ start: i, end });
    }
    return parts;
};

console.time("PRIMES COUNT TIME");
const threadPromises = [];

if (isMainThread) {
    const parts = breakIntoParts(number, 8);

    parts.forEach((part) => {
        const thread = new Worker(__filename, {
            workerData: {
                start: part.start,
                end: part.end
            }
        });
        threads.add(thread);

        const threadPromise = new Promise((resolve) => {
            thread.on("error", (err) => {
                throw err;
            });
            thread.on("exit", () => {
                threads.delete(thread);
                console.log(`Thread exiting, ${threads.size} running...`);
                resolve();
            });
            thread.on("message", (msg) => {
                console.log(msg);
            });
        });

        threadPromises.push(threadPromise);
    });

    Promise.all(threadPromises).then(() => {
        console.timeEnd("PRIMES COUNT TIME");
    });

} else {
    const primes = generatePrimes(workerData.start, workerData.end);
    parentPort.postMessage(`Completed primes count for ${workerData.start} and ${workerData.end}`);
}