/** bu misolni yozishdan maqsad clientda nma kelsa shuni ozini clientga qaytarib jonatib yuboramiz */
const net = require('node:net');
const server = net.createServer((c) => {
    /**connection yaratildi connectin bu tcp socketni instase si
     * bu duplex stream yani bunga yozish mumkim va oqish mumkin
     */
    // 'connection' listener.
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.write('hello: ' + Date.now() + '\r\n'); //javob yuborish //shu yerda yana httpdan farqi end qilish shart emas httpsa end qilmas server yakunlanmaydi bu esa unda doimiy ochiq turadugan 1ta kanal uni end qilish kerak mas va end siz ishlaydi

    // setInterval(() => {
    //     c.write('hello: ' + Date.now() + '\r\n'); //javob yuborish
        
    // }, 500);

    c.on('data', (data) => {
        console.log('got data client');
        console.log(data.toString());
        c.write(data);
    }) //by code bn pasda gi pipe bix xil

    // c.pipe(c); //pipe qilganda readable ishlaydi pipe ni ulaganimizda writeanle ishlaydi. yuqo
});
server.on('error', (err) => {
    throw err;
});
server.listen(8124, () => {
    console.log('server bound');
});