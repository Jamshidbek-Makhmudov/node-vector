/**readable.from bu itterable objectdan readable stream yaratish; u itterable kutadi va shundan read stream yasab beradi
 * use case lari birorta massive bolsa shuni 1tada emas bolib bolib jonatib yuborsak boladi
 * itterable array qabul qiladi
 */
const { Readable } = require('stream');
const readStream = Readable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// readStream.on('data', (data) => { console.log(data);
// })
readStream.pipe(process.stdout); //terminalga yozishb uchun, yani biz hozir readStrean ni  oqib uni terminalga yozishb uchun pipe qildik

//readStream.pipe(processs.stdin) //terminalda oqish uchun