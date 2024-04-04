const fs  = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  for(let i = 1; i < 1000_000_000; i++){};
  // setImmediate(() => {
  //   console.log('setImmediate');
  // });
});

setImmediate(() => {
  console.log('setImmediate');
});
















// setTimeout(() => {
//   console.log('setTimeout');
// }, 1);

// setImmediate(() => {
//   console.log('setImmediate');
// });