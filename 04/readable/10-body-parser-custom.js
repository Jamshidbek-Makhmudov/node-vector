/** bu misol custom body parser un yozildi*/
//console.log('10-body-parser-custom.js');
const fs = require('fs');
const server = require('http').createServer();

async function bodyParserAsync(req) {
	const result = [];
	for await (const d of req) result.push(d); //req ni chunk by chunk oqib olish va arrayga push qilib ketish bu yerda const d  1ta symbol emas bu buffer 
	const parsedData = JSON.parse(Buffer.concat(result).toString()); // bufferlarni qohib olish uchun Buffer.concat
	req.body = parsedData;
	return parsedData
}
 

server.on('request', async (req, res) => {
	const body = await bodyParserAsync(req)
	console.log({body:req.body});
	
	console.log('get req');
	fs.createReadStream('data.txt', { highWaterMark: 12 }).pipe(res);


});
server.listen(8000, () => {
	console.log("running");
})
