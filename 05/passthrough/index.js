/** This file is broken for check pass through method */
import { PassThrough } from 'stream';
import { createReadStream } from "fs";

let bytesWriten = 0;
const monitor = new PassThrough(); //passThrough ga malumot kelgan da write qissmi ishlaydi, chiqib ketganda write qismi ishlaydi

////1
// monitor.on('data', (chunk) => bytesWriten += chunk.length);
// monitor.on('finish', () => console.log(`${bytesWriten} bytes written`));
// monitor.write('helllo')
// monitor.end()

const rs = createReadStream('index.js');
monitor.bytesWriten = 0;
monitor.on('data', (chunk) => monitor.bytesWriten += chunk.length);
monitor.on('finish', () => console.log(`${monitor.bytesWriten} bytes written`));
rs.pipe(monitor);