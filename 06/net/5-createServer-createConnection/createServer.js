const net = require('net');

const server = net.createServer((socket) => {
	console.log('Client connected');

	socket.on('data', (data) => {
		console.log(`Received data from client: ${data}`);
		socket.write(`Echo: ${data}`);
	});

	socket.on('end', () => {
		console.log('Client disconnected');
	});
});

server.listen(8080, () => {
	console.log('Server listening on port 8080');
});
