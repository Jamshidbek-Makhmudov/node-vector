const fs = require('fs');
//const data = fs.readFileSync("doc.txt");
fs.writeFileSync("doc.txt","hello world")
const data = fs.readFileSync("doc.txt"); //current file
//const data = fs.readFileSync(__filename); //current file
//const data = fs.readFileSync(__dirname); //current path
//console.log(process.cwd);//process bu root directory


console.log(data.toString()); //default utf-8
//console.log(data, toString('utf-8')); //default utf-8

fs.readFile('doc.txt', (err, data) => { 
	console.log(data.toString()); 
	/** asynxron functionn oz ichida call back function qabul qiladi call backl function bu birota event yuz berganda ishlaydigan function 
	 * bu yerda calback function 'doc.txt' dan qaytadigan malumot  call back function ichida ishlaydi
	 */
});

fs.writeFile("doc.txt", "hello world", (error) => { });
//fs.unlinkSync("doc.txt") //sink ishlatiah kerak sabab unlik asyn xishlatish mantiqsizlik boladi va bu yaqina depricated bolishimi kmukin
