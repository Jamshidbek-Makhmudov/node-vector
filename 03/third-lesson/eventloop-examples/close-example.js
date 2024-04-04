const fs = require('fs');

const str = fs.createReadStream(__filename);

str.close(() => console.log('close'));
setTimeout(() => {
    console.log('timeout1')
}, 10);

setTimeout(() => {
    console.log('timeout1')
}, 10);


process.nextTick(() => console.log('tick1'));