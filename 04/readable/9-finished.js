/** 9-finished.js 
 readsream tugallanganligini bilish uchun alohida method bor finished degam
*/
const { finished } = require('node:stream');
const fs = require('node:fs');

const rs = fs.createReadStream("data.txt");
rs.pipe(process.stdout)

rs.on('end', () => { 

	finished(rs, (err) => {
		if (err) {
			console.log(`stream failed: ${err}`);
		} else { 
			console.log(`stream is doen reading`);
		}
	})
})