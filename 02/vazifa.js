/**
 #vazifa 

util modulidagi promisify metodini 0 dan yasash
directory path berilganda o'sha dirdagi hamma fayllar va papkalar ,ularni ichidagi fayllar va h.k larni chiqarish 
natija arrayda bo'ladi

javob:
const fs = require('fs');
const path = require('path');

function promisify(func) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			func(...args, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	};
}

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function promisifyDirectory(src) {
	try {
		const files = await readdir(src);

		const result = [];

		for (const file of files) {
			const filePath = path.join(src, file);
			const stats = await stat(filePath);

			if (stats.isDirectory()) {
				const subFiles = await promisifyDirectory(filePath);
				result.push({ [file]: subFiles });
			} else {
				result.push({ [file]: null });
			}
		}

		return result;
	} catch (error) {
		throw error;
	}
}

// Example usage:
const srcDirectory = './src';
promisifyDirectory(srcDirectory)
	.then(files => {
		console.log('Files and folders:', JSON.stringify(files, null, 2));
	})
	.catch(error => {
		console.error('Error:', error);
	});





#vazifa 

Eventloop fazalariga oid darsda ko'rganimizga o'xshash kamida 5 ta misol yozib kelinglar.
Qancha murakkab bo'lsa shuncha yaxshi.
*/



