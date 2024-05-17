
const { setTimeout } = require('node:timers/promises');

const sleep = ms => setTimeout(ms);

// 1)
// const promises = [sleep(100), sleep(200), sleep(300)]

// 2) invokable
// const promises = [sleep.bind(null, 100), sleep.bind(null, 200), sleep.bind(null, 300)]

// 3) invokable
// const promises = [
//     () => sleep(100),
//     () => sleep(200),
//     () => sleep(300),
//   ];


/**
 * 
 * @param {Array<Function>} promises array of functions returning promises when called
 * @returns 
 */
function runPromisesSequentially(promises) {
  return promises.reduce((previousPromise, currentPromise) => {
    return previousPromise.then(() => currentPromise());
  }, Promise.resolve());
}


console.time('Duration')
runPromisesSequentially(promises)
  .then((results) => console.timeEnd('Duration')) // Array of results from each promise
  .catch((error) => console.error(error));

