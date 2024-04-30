/** activity monitor */
/**create file and write 1000_000 times into it */
// const fs = require('node:fs/promises');
// console.time("writeMany");
// (async () => {
// 	const fileHandle = await fs.open('test.txt', "w")
// 	for (let i = 0; i < 1_000_000; i++) {
// 		await   fileHandle.write(` ${i} `)
		
// 	}
	
//  })()

// console.timeEnd("writeMany");
/**
 * takes  0.206ms to run
 * uses 100% of the cpu (one core)
 * memory usage: 50mb
 
*/

/** usng callback is 5 time faster: */
const fs = require('node:fs');
console.time("writeMany");
( () => {
	fs.open('test.txt', "w", (err, fd) => { 

		for (let i = 0; i < 1_000_000; i++) {
			 fs.writeSync(fd, ` ${i} `);
			
		}
	});

})();

console.timeEnd("writeMany");
/**
 * takes  0.196 ms to run
 * uses 100% of the cpu (one core)
 * memory usage: 19mb
 
*/
