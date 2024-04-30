const { spawn, exec, fork } = require('node:child_process');
// const ls = spawn('htop');
const child = spawn('node', ['spawn-file.js']);
// const child = spawn('bash ', ['node', 'spawn-file.js']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.on('message', (msg) => console.log('Message from child: ', msg));

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// ls.on('close', (code) => {
//   console.trace(`child process exited with code ${code}`);
// });
