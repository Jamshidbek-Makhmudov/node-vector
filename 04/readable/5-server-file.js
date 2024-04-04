/** bu misol server kotarib fileni  oqib uni resdan jonatib yuborish un yozildi*/
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	console.log('get req');
	fs.createReadStream('data.txt', { highWaterMark: 12 }).pipe(res)
	//shunda toxtamasdan res jonatadi stream sifatida read qilib pipega write qilib jonatadi
	
 })
server.listen(8000, () => { console.log("running");
})
/** nodejs file oqish thread poolda amalga oshiriladi shuning uchun bu nagruska boladi shusabab nodejsda fs bilam ishlash best practise emas orniga s3 yoki minio yoki shunga oxshash xizmatlarni ishlatgan avzal
 
 nodejs network bilan ishlaganda yoki baza bilan ishlaganda zor file bilan emas
 */