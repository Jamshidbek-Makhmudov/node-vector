const { spawn } = require('child_process');
const { watchFile } = require('fs');

/**
 * run
 * watch
 * pipe
 * spawn
 * restart
 * kill
 * executable
 *
 *
 *
 * timeout
 *
 */

const file = process.argv[2];

console.log({ file })

let child = {};


function spawn2(fileName) {
    child = spawn(`node`, [fileName]);
    return child;
}

function pipe(child) {
    child.stdout(process.stdout);
}

function watch(fileName) {
    watchFile(fileName, (_, _2) => {
        //ozgarish
        restart();
    })
}

function run(fileName) {
    const child1 = spawn2(fileName);
    pipe(child1);
}


function restart(fileName, child) {
    kill(child.pid);
    run(fileName)
}

function kill(pid) {
    process.kill(pid);
}


run(file);
watch(fileName);





