/** createConnection client tarafdan amalga oshiriladi */
const net = require('net');

const client = net.createConnection({ port: 8080, host: 'localhost' }, () => {
	console.log('Connected to server');

	client.write('Hello from client');
});

client.on('data', (data) => {
	console.log(`Received data from server: ${data}`);
});

client.on('end', () => {
	console.log('Disconnected from server');
});
