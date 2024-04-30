console.log('***Login or signup with your credentials***')
process.stdin.on('data', (data) => {
    const command = data.toString().slice(0, data.toString().length - 1);
    console.log({ command })
    if (command === 'login') {
        console.log('Enter your login: ');
        console.log('Enter your password: ');
    }
    if (command === 'signup') { }
    if (command === 'help') { }
})

const { ChildProcess, exec, execFile, execSync, spawn, spawnSync } = require('child_process');
const chp = require('child_process');

const c = require('node:cluster')

