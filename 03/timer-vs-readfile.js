const fs = require('fs');

setTimeout(() => {
  console.log('hello');
}, 50);


fs.readFile(__filename, () => {
  console.log('world');
});
