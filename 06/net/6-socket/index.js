/**
Certainly! The socket.connect(options[, connectListener]) method in Node.js is used to establish a connection to a TCP server. This method is typically used with net.Socket objects to initiate a connection from a client to a server.

Here's a detailed explanation of socket.connect() with examples:

Basic Usage of socket.connect() */
const net = require('net');

const client = new net.Socket();

client.connect({ port: 3000, host: 'localhost' }, () => {
	console.log('Connected to server');

	client.write('Hello from client');
});

client.on('data', (data) => {
	console.log(`Received: ${data}`);
});

client.on('end', () => {
	console.log('Disconnected from server');
});

/**Handling Errors with socket.connect()
You can also handle connection errors by listening to the 'error' event on the net.Socket object. */

// const net = require('net');

// const client = new net.Socket();

// client.connect({ port: 3000, host: 'localhost' }, () => {
// 	console.log('Connected to server');
// });

// client.on('data', (data) => {
// 	console.log(`Received: ${data}`);
// });

// client.on('end', () => {
// 	console.log('Disconnected from server');
// });

// client.on('error', (error) => {
// 	console.error(`Error: ${error.message}`);
// });

/**Using socket.connect() with connectListener
The connectListener is an optional callback function that is executed once the connection is established. It is an alternative way to handle the connection event instead of using the 'connect' event. */


// const net = require('net');

// const client = new net.Socket();

// client.connect({ port: 3000, host: 'localhost' }, (error) => {
// 	if (error) {
// 		console.error(`Error: ${error.message}`);
// 		return;
// 	}

// 	console.log('Connected to server');
// });

// client.on('data', (data) => {
// 	console.log(`Received: ${data}`);
// });

// client.on('end', () => {
// 	console.log('Disconnected from server');
// });
