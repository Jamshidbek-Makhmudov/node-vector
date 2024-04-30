const fs = require('fs');
const { cwd } = require('node:process');

console.log(`Current directory: ${cwd()}`);

process.chdir('process');
console.log(`Current directory: ${cwd()}`);

fs.readFile('title.js', (err) => {
    console.log({err})
})

