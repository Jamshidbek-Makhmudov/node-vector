const { createReadStream, createWriteStream, readFileSync } = require('fs');
const { Transform, Readable, PassThrough } = require('stream');
const { randomUUID } = require('crypto');
const jSonData = JSON.parse(readFileSync('data.json', 'utf8'));

const rs = Readable.from(jSonData);

/** transform streamlarda data kelganda write stream ishlaydi chiqadigan paytda read stream ishlaydi*/
const fileTransformer = new Transform({
	objectMode: true,
	transform(chunk, encoding, cb) {
		chunk.id = randomUUID();
		cb(null,chunk)
	 }
});

let firstChunk = true;
let firstPush = true;
const objectToString = new Transform({

	writableObjectMode: true,
	readableObjectMode: false, 
/**lekin bunda yol yolakay objectModelarni ozgartirish yomon oqibatlarga olib keladi shuning uchun bunday ishlatish best practise emas  */
	transform(chunk, _, cb) {
		// console.log(firstChunk);
		
			if (firstChunk) {
				this.push('[ \n');
			 	firstChunk = false;
			} else if (!firstPush) {
				this.push(',\n');
			}
			this.push(JSON.stringify(chunk));
			firstPush = false;
			cb();
			// cb(null, JSON.stringify(chunk) + ",\n")
	},
	flush(cb) {
		this.push(' \n]');
		cb();
	}

});

const ws=createWriteStream("transformed-data.json")

const logger = new PassThrough({ objectMode: true });

logger.on('data', (d) => {
	console.log('Got new Data');
	console.log(d);
	console.log(`--------------------------------`);
})
rs
	.pipe(fileTransformer)
	.pipe(logger)
	.pipe(objectToString)
	.pipe(ws); //pipe qilishda writeni oxirida yozish kerak sababi u ozidan keying data ga otqazmaydi