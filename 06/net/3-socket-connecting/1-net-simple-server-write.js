const net = require('node:net');
const server = net.createServer();

server.on('connection', (socket) => {
    console.log('client connected!')
    socket.write('hehehe\n');
    // socket.end();
    socket.on('data', (data) => {
        console.log('Data from client');
        console.log(data.toString());
    })
})

server.listen(8124, () => {
    console.log('server bound');
});