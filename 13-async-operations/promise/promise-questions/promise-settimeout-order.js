// (async () => {
//     const promise = new Promise((resolve, reject) => {
//         console.log("1");
//         resolve('abc');
//     })

//     console.log(promise)
//     // promise.then((result) => {
//     //     console.log("2");
//     // });

// //
// //   promise.then((result) => {
// //         console.log("2");

// //         setTimeout(() => {
// //             console.log("3");
// //         }, 0);

// //         console.log("4");
// //     });

//     const data = await promise
//     console.log('promise data', data)
//     console.log("2");

//     setTimeout(() => {
//         console.log("3");
//     }, 0);

//     console.log("4");

// })()

const promise = new Promise((resolve, reject) => {
  console.log("1");
  resolve();
}).then((result) => {
  console.log("2");
});

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");
