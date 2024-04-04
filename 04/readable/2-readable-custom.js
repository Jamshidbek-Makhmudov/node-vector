/**bu yerda custom sream yozildi */
const { Readable } = require('stream');

//this data can also come from other streams
let dataToStream = [
	'this is line 1\n',
	'this is line 2\n',
	'this is line 3\n',
	'this is line 4\n',
	'this is line 5\n',
];

class MyReadable extends Readable { 
	construct(opts) {
		super()
	}
	_read() {
		//the consumer is ready for more datas
		this.push(dataToStream.shift()) 
		if (!dataToStream.length) {
			this.push(null) // end the stream
		 }
	}
	_destroy() {
		//not necessary but illustrates things to do on end
		dataToStream=null
	 }
}

new MyReadable().pipe(process.stdout)




// /**bu yerda custom sream yozildi */
// const { Readable } = require('stream');

// //this data can also come from other streams
// let dataToStream = [
// 	'this is line 1\n',
// 	'this is line 2\n',
// 	'this is line 3\n',
// 	'this is line 4\n',
// 	'this is line 5\n',
// ];

// class MyReadable extends Readable {
// 	#index;
// 	construct(opts) {
// 		super();
// 	}
// 	_read() {
// 		//the consumer is ready for more datas
// 		this.push(dataToStream[this.#index++]);
// 		if (this.#index===dataToStream.length) {
// 			this.#index=0 // end the stream
// 		}
// 	}
// 	_destroy() {
// 		//not necessary but illustrates things to do on end
// 		dataToStream = null;
// 	}
// }

// new MyReadable().pipe(process.stdout);
