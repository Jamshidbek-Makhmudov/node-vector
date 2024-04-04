
//1
const fs = require('fs');
const now = Date.now();
setTimeout(() => {
	console.log('hello');
}, 50);

fs.readFile(__filename, () => {
	console.log('world'); //fileni oqish uchun 1-10 millesecund vaqt ketadi 
});

setImmediate(() => {
	console.log('immediate');
});

while (Date.now() - now < 2000) { } // 2 second block












/** 
//2
setTimeout(() => {
	console.log('setTimeout');
}, 0); // 0 == 1

setImmediate(() => {
	console.log('setImmediate');
});


//3
const fs = require('fs');

fs.readFile(__filename, () => {
	setTimeout(() => {
		console.log('setTimeout');
	}, 0);
	
	setImmediate(() => {
		console.log('setImmediate');
	});
	
});  



//4 micro tasklar: boyicha
process.nextTick(() => {
	console.log('nextTick 1');
	
	process.nextTick(() => {
		console.log('nextTick 2');
		
		process.nextTick(() => console.log('nextTick 3'));
		process.nextTick(() => console.log('nextTick 4'));
	});
	
	process.nextTick(() => {
		console.log('nextTick 5');
		
		process.nextTick(() => console.log('nextTick 6'));
		process.nextTick(() => console.log('nextTick 7'));
	});
	
});


//5
process.nextTick(() => {
	console.log('nextTick');
});

Promise.resolve()
.then(() => {
	console.log('Promise');
});

setTimeout(() => {
	console.log('setTimeout');
}, 0);

setImmediate(() => { 
	console.log('setImmediate');
});




//6
const fs = require('fs');

fs.readFile(__filename, () => {
	// read file ni ichida steTime out bolsa set imidiate birinchi chiqadi har safar 

	process.nextTick(() => {
		console.log('nextTick in fs'); 
	});

	setTimeout(() => {
		console.log('setTimeout'); 

		process.nextTick(() => {
			console.log('nextTick in setTimeout'); 
		});
	}, 0);

	setImmediate(() => {
		console.log('setImmediate'); 

		process.nextTick(() => {
			console.log('nextTick in setImmediate'); 

			Promise.resolve()
				.then(() => {
					console.log('Promise in setImmediate'); 
				});
		});
	});

});


*/


//7
// async function blocking() {
// 	for (let i = 1; i < 1000000000; i++) { }
// 	console.log('block');
// }

// Promise.resolve().then(blocking);
// console.log('log');