/**bu yerda readable ni pause va resume methodiga misol */
const fs = require('fs');

// fs.readFile('data.txt', (err, data) => { });
// const readStream = fs.createReadStream('data.txt', {
// 	highWaterMark: 23   //highWaterMark option ni streamni necha baytdan oqish buyrugi hisoblanadi
// });

// readStream.on("data", (data) => {
	// 	console.log('data');
	// 	readStream.pause()
	
	// 	setTimeout(() => {
		// 		readStream.resume()
		// 	}, 2000);
		
		//  })
		
		
		fs.readFile('data.txt', (err, data) => { });
		const readStream = fs.createReadStream('data.txt', {
			highWaterMark: 23   //highWaterMark option ni streamni necha baytdan oqish buyrugi hisoblanadi
		});

readStream.on('open', () => { 
	console.log('file opened');
	readStream.pause()
	setTimeout(() => {
		readStream.resume()
	}, 2000);
	
})


readStream.on('data', (chunk) => {
	console.log('got data: ' + chunk.toString())
})
 
readStream.on('pause', () => {
	console.log('stream paused ')
 })
readStream.on('resume', () => {
	console.log('stream in flowing mode ')
 })
readStream.on('end', () => {
	console.log('stream ended ')
 })
readStream.on('close', () => {
	console.log('stream closed ')
 })

