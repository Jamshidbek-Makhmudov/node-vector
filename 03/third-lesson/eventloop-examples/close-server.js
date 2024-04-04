const http = require('http');


const server = http.createServer((req, res) => {

}).listen(3000, () => console.log('server started'));

setTimeout(() => {
    server.close(() => console.log('server closed'))
}, 2000);