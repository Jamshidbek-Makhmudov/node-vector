// const net = require('net');

// // Create a TCP client
// const client = net.createConnection({ port: 3000 }, () => {
// 	console.log('Connected to server');

// 	// Read input from the console and send it to the server
// 	process.stdin.on('data', (data) => {
// 		const message = data.toString().trim();
// 		client.write(message);
// 	});
// });

// // Handle data from the server and display it in the console
// client.on('data', (data) => {
// 	console.log(data.toString());
// });

// // Handle disconnection from the server
// client.on('end', () => {
// 	console.log('Disconnected from server');
// });


const net = require("net");
const readline = require("readline/promises");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// creating your callback fucntions into promise based function.
const clearLine = (dir) => {
	return new Promise((resolve, reject) => {
		process.stdout.clearLine(dir, () => {
			resolve();
		});
	});
};

const moveCursor = (dx, dy) => {
	return new Promise((resolve, reject) => {
		process.stdout.moveCursor(dx, dy, () => {
			resolve();
		});
	});
};

let id;

const socket = net.createConnection(
	{
		// client creation.
		port: 8080,
		host: "127.0.0.1",
	},
	async () => {
		console.log("connection established");

		const ask = async () => {
			const message = await rl.question("Enter a message >");
			// move the cursor one line up
			await moveCursor(0, -1);
			// clear the current line the cursor is in
			await clearLine(0);
			socket.write(`${id}-message-${message}`);
		};

		ask();

		socket.on("data", async (data) => {
			// log empty line
			console.log();
			// move the cursor one line up
			await moveCursor(0, -1);
			// clear that line the cursor just moved into
			await clearLine(0);

			if (data.toString("utf-8").substring(0, 2) === "id") {
				// when we are getting the id...

				id = data.toString("utf-8").substring(3); // everything from the third character until the end.

				console.log(`Your id is ${id}\n`);
			} else {
				// when we are getting the message

				console.log(`${data.toString("utf-8")}`);
			}

			ask();
		}); // I anm recieveing the message back from the server and logging it in the client-side
	}
);

socket.on("end", () => {
	console.log("connection closed");
});