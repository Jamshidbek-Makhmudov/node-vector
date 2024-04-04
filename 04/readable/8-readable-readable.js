/** 8-readable-readable.js
	bu misol readable eventi uchun yozildi 
	readStreamni readable degani eventi bor u file oqishga tayyor bolsa ishlaydi
 */
const { performance } = require('perf_hooks');
const fs = require('fs');
const start = performance.now();
const readable=fs.createReadStream("data.txt");

//'readable' maybe triggered multiple times as data is buffered in 
readable.on("data", () => {
	console.log(performance.now()-start);
	
	let chunk;
	console.log('stream is readable (new data received in buffer)');

	//use loop to make sure we read all currently available data
	while (null !== (chunk = readable.read())) { //read methodi kelgan buffefrni chunk by chunk qilib oqib olishga xizmat qiladi
		console.log(`Read ${chunk.length} bytes of data`);
		
	 }

	//'end' will be triggered once when there is no more data available
	readable.on('end', () => { 
		console.log('reached end of stream');
		
	})
	
})