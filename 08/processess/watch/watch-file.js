/// make mydemon executable
// add to ssh

const { spawn } = require('child_process');
const fs = require('fs');
console.log(process.argv)
const filename = process.argv[2];
// console.log('file passed: ', process.argv[2]);

let child = {};

function kill(pid) {
    try {
        process.kill(pid, 'SIGTERM');
    } catch (error) {
        console.log({ error })
    }
}

function watch(fileName, child, options) {
    fs.watchFile(fileName, (curr, prev) => {
        restart(fileName, child, options)
    });
}

function pipeLogs(childProcess) {
    childProcess.stdout.pipe(process.stdout)
}

function run(fileName, options) {
    child = spawn2(filename, options);
    watch(fileName, child, options);
    pipeLogs(child);
}

function restart(fileName, child, options) {
    kill(child.pid,);
    child = run(fileName, options);
}

function spawn2(fileName, options) {
    const child = spawn('node', [fileName], options);
    console.log('Child process id: ', child.pid)
    return child;
}


child = run(filename);







// child.on('exit', (code) => {

// })

// child.on('error', (code) => {

// })
