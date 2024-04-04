/** bu misolda 5-file run bolib turgan serverga req tashimiz va res ni console.log da chiqaramiz */
const http = require('http');

const bodyData = JSON.stringify({ name: "John Doe", })

const req = http.request({
	hostname: "127.0.0.1",
	path: "/",
	port: 8000,
	headers: {
		'Content-Type': 'application/json',
		'content-length':Buffer.byteLength(bodyData)
	}
}, async (res) => {
	//1 
	for await (const d of res) { 
		console.log(d.toString())
		
	}
	//2
	/**
	 
	res.on('data', (d) => { 
		console.log({d});
	})
	*/
	console.log({res});

 })
req.write(bodyData);
req.end()