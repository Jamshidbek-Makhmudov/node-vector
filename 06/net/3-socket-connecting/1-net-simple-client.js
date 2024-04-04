/**bu misol connecting methodini ishlatib korish un boldi */
const net = require('node:net');

const socket = net.connect(8124, 'localhost');
console.log('Socket connecting:', socket.connecting); //check the connected or not //true

socket.on('connect', () => {
    console.log('Connection established!');
    console.log('Socket connecting:', socket.connecting);//false
})

setInterval(() => {
    socket.write('whatsup??');
}, 1000)