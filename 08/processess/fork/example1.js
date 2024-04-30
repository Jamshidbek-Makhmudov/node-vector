const { fork } = require('child_process')

if (process.argv[2] === 'child') {
    console.log(`My processId: ${process.pid}`)
    setTimeout(() => {
        console.log(`Hello from ${process.argv[2]}!`);
    }, 1_000);
} else {
    console.log(`My processId: ${process.pid}`)
    const { fork } = require('node:child_process');
    const child = fork(__filename, ['child']);
    child.on('error', (err) => {
        // This will be called with err being an AbortError if the controller aborts
    });
}