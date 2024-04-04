const fsPrimse = require('fs/promises');
(async () => {
	const data = await fsPrimse.readFile("doc.txt");
	console.log(data.toString());
	
})()

/** */
const fs = require('fs');

const data = "sample file 2";

(() => {
	new Promise((resolve, reject) => {
		fs.writeFile("doc.txt", data, 'utf-8', (err) => {
			if (err) reject(err);
			else resolve(data);
		});
	})
	.then(function (results) {
		console.log("results here: " + results);
	})
	.catch(function (err) {
		console.log("error here: " + err);
	});
})()

