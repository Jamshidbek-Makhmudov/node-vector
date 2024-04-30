const { fork } = require('child_process')

console.log(`My processId: ${process.pid}`)
const child = fork('child.js', ['child']);
child.on('error', (err) => {
    // This will be called with err being an AbortError if the controller aborts
});
