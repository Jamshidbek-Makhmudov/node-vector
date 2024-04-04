// const fs = require("fs");

// function readFile(path, options) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, options, (err, data) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(data);
// 		});
// 	});
// }

// function writeFile(path, data, options) {
// 	return new Promise((resolve, reject) => {
// 		fs.writeFile(path, data, options, (err) => {
// 			if (err) {
// 				reject(err);
// 			}
// 		});
// 	});
// }

// module.exports = {
// 	readFile,
// 	writeFile
// };

// const fs = require('fs');
// const now = Date.now();

// setTimeout(() => {
// 	console.log('hello');
// }, 50);

// fs.readFile(__filename, () => {
// 	console.log('world');
// });
// setImmediate(() => {
// 	console.log('immediate');
// });


//while (Date.now() - now < 2000) { } // 2 second block


// setTimeout(() => {
// 	console.log('setTimeout');
// }, 0); // 0 == 1

// setImmediate(() => {
// 	console.log('setImmediate');
// });


// process.nextTick(() => {
// 	console.log('nextTick 1');

// 	process.nextTick(() => {
// 		console.log('nextTick 2');

// 		process.nextTick(() => console.log('nextTick 3'));
// 		process.nextTick(() => console.log('nextTick 4'));
// 	});

// 	process.nextTick(() => {
// 		console.log('nextTick 5');

// 		process.nextTick(() => console.log('nextTick 6'));
// 		process.nextTick(() => console.log('nextTick 7'));
// 	});

// });

// process.nextTick(() => {
// 	console.log('nextTick');
// });

// Promise.resolve()
// 	.then(() => {
// 		console.log('Promise');
// 	});

// setTimeout(() => {
// 	console.log('setTimeout');
// }, 0);

// setImmediate(() => {
// 	console.log('setImmediate');
// });

// const fs = require('fs');

// fs.readFile(__filename, () => {
// 	process.nextTick(() => {
// 		console.log('nextTick in fs');
// 	});

// 	setTimeout(() => {
// 		console.log('setTimeout');

// 		process.nextTick(() => {
// 			console.log('nextTick in setTimeout');
// 		});
// 	}, 0);

// 	setImmediate(() => {
// 		console.log('setImmediate');

// 		process.nextTick(() => {
// 			console.log('nextTick in setImmediate');

// 			Promise.resolve()
// 				.then(() => {
// 					console.log('Promise in setImmediate');
// 				});
// 		});
// 	});
// });






// ///



