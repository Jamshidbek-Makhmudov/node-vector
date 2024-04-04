const net = require('net');

// Array to keep track of connected clients
let clients = [];

// Create a TCP server
const server = net.createServer((socket) => {
	console.log('Client connected');

	// Add new client to the clients array
	clients.push(socket);

	// Handle data from clients
	socket.on('data', (data) => {
		const message = data.toString().trim();

		// Broadcast the message to all connected clients
		broadcast(message, socket);
	});

	// Handle client disconnection
	socket.on('end', () => {
		console.log('Client disconnected');

		// Remove the disconnected client from the clients array
		clients = clients.filter(client => client !== socket);
	});
});

// Function to broadcast message to all connected clients
function broadcast(message, sender) {
	clients.forEach(client => {
		if (client !== sender) {
			client.write(message + '\n');
		}
	});
}

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
