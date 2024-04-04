/**bu yerda filelarni stream qilib oqish misol */
//console.log('1-readable-on-datas.js');
const fs = require('fs');
fs.readFile('data.txt', (err, data) => { })
const readStream = fs.createReadStream('data.txt', {
	highWaterMark: 23   //highWaterMark option ni streamni necha baytdan oqish buyrugi hisoblanadi
});

//1
// readStream.on('data', (d) => {
// 	console.log(d.toString());
// 	console.log({len:d.length});
// })
 

/** 
 streamlar bilan ishlaganda doim bayt bilan ishlaymiz malumotlarni baytda hisoblash uchun 1024ga bolish kerak */

// yuqorida syntaxisni boshqacha qilib ishlatsak boladi:
//yani ozi async itterable dan protocol bor bunda malumotlar ketma ket keladi oldindan olchov berilmidi, shu jonatgan malumotiga qarab malumot tugadi yoki tugamadi bilish mumkin
//yani for await itterable malumotlar kelaveradi qachon tugashi nomalim lekin qacon malumotlar tugasa ya'ni kemasa shunda bu itterable ham tugaydi
//2
(async () => { 
	for await (const t of readStream) { 
			console.log(t.toString());
			console.log({len:t.length});
	}
})()