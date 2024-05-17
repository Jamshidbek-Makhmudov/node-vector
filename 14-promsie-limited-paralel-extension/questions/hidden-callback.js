
const { setTimeout } = require('node:timers/promises');

const sleep = ms => setTimeout(ms);

(async () => {
    await sleep(2000);
    console.log(1);
    await sleep(1500);
    console.log(2);
})()



// (async () => {
//     sleep(2000)
//         .then(() => {
//             console.log(1);
//             sleep(1500).then(() => {
//                 console.log(2);
//             });
//         })
// })()