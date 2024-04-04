const fs = require('fs');
const original =fs.createReadStream('./ original.txt')
const copy1 = fs.createWriteStream('./ copy1.txt');
const copy2 = fs.createWriteStream('./ copy2.txt');
original.pipe(copy1);
original.pipe(copy2);