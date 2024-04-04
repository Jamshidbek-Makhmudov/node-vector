const net = require('node:net');
const server = net.createServer(); //server instance yaratildi

server.on('connection', (socket) => { //client connect qilgan shu event triggered qilinadi
    /**bu yerda socket client bilan server ortasidagi connection yoki turba deb tasavur qilsak boladi  2ta tomonga ham malumot almashinish mumkin*/
    console.log('client connected!')
    console.log(socket)
})

server.listen(8124, () => { // endi server  listening qilishni boshladi
    console.log('server bound');
});

/**connection check qilsih uchun telnet ornatish kerak: 
 * brew install telnet
     keyin terminal da telnet localhost 8124 yozish kerak
 */