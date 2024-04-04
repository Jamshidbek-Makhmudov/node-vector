/** bu misol multiple pipe ga misol qilib yozildi */
const fs = require('node:fs');
const zlib = require('node:zlib'); //bu ziplar bilan ishlash un
 
const r= fs.createReadStream("data.txt")
const z= zlib.createGzip() //oziga kelgan daat ozgartirib jonatib yuboradi
const w = fs.createWriteStream("data.tx.gz") //shu source yozadi

r.pipe(z).pipe(w)

