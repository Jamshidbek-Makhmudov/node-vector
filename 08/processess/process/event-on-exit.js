const process = require('node:process');

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});