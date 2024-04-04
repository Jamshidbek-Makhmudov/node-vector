const net = require('node:net');

const socket = net.connect(8124, 'localhost'); //createConnection() ham bir xil

setInterval(() => {
    /**stream lar string yoki buffer qabul qiladi socket ham stream bolgani uchun string yoki buffer kutadi shuning uchun object yoki array yubormoqchi bolsak stringify qilib yuborishimiz kerak */
    socket.write(JSON.stringify(process.memoryUsage()));
}, 1000)