const process = require('node:process');
// This promise is created but its rejection is not handled
const myPromise = new Promise((resolve, reject) => {
    reject(new Error("Unhandled Promise Rejection!"));
});

// No .then or .catch is used to handle the rejection
// This will trigger the UnhandledPromiseRejectionWarning
myPromise;


process.on('unhandledRejection', (reason) => {
    console.log({ reason })
})

process.on('uncaughtException', (err, origin) => {
    console.log({ err, origin })
});