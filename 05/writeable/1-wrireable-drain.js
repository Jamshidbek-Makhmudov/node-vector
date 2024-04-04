/** bu misol highwatermark ni ishlatish uchun yozildi */
const { Writable } = require('stream');
const { once } = require('events');

class Counter extends Writable {
	_write(chunk, encoding, cb) {
		console.log(chunk.toString());
		cb() //callback ni ishlatmasa ham chaqirib qoyish kerak bomasa keyinigsiga otmaydi
	 }
}
const counter = new Counter({ highWaterMark: 3 });

(async () => {
	for (let i = 1; i <= 100; i+=1) {
		const canWeWrite = counter.write(Buffer.from(`${i} `, 'utf-8'))
		
		console.log(`can we write bunch of data?  ${canWeWrite}`);
		
		if (!canWeWrite) { 
			await once(counter, 'drain')// bu buffer tolib ketgan tgigger boladigan method
			console.log('drain event fired');
	
		}
	}
 })()