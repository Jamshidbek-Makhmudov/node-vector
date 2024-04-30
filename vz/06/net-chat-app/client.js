const net = require('net');

// Create a TCP client
const client = net.createConnection({ port: 3000 }, () => {
	console.log('Connected to server');

	// Read input from the console and send it to the server
	process.stdin.on('data', (data) => {
		const message = data.toString().trim();
		client.write(message);
	});
});

// Handle data from the server and display it in the console
client.on('data', (data) => {
	console.log(data.toString());
});

// Handle disconnection from the server
client.on('end', () => {
	console.log('Disconnected from server');
});
