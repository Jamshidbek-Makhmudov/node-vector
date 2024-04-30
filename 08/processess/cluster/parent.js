const { fork } = require('node:child_process');

const cpuCount = require('os').availableParallelism();

const workers = new Array(cpuCount).fill(0).map(_ => fork('subproc.js'));


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Open up the server and send sockets to child. Use pauseOnConnect to prevent
// the sockets from being read before they are sent to the child process.
const server = require('node:net')
  .createServer({ pauseOnConnect: true });


server.on('connection', (socket) => {
  const randomWorkerId = randomInteger(0, cpuCount - 1);
  const worker = workers[randomWorkerId];
  worker.send('socket', socket);
  return;
});
server.listen(1337);

