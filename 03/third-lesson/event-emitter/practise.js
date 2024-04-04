const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();
//ishlatish
/**
 //1
eventEmitter.on('myEvent', (data) => {
	console.log(data);
});

console.log('Statement A');
eventEmitter.emit('myEvent', 'Statement B'); //2 - argument
console.log("Statement C");



//2
eventEmitter.on('myEvent', (data) => {
	console.log(data, '- FIRST');
});

console.log('Statement A');

eventEmitter.on("myEvent", data => {
	console.log(data, '- SECOND');
});

eventEmitter.emit('myEvent', 'Emitted Statement');

console.log("Statement B");



//3 events with streams
const { createReadStream } = require('fs');
let chunkIndex = 0;
const readStream = createReadStream("./data.txt");

readStream.on("open", () => {
	console.log("Started Reading...");
});

readStream.on("end", () => {
	console.log("Completed Reading...");
});

readStream.on("data", chunk => {
	console.log("Chunk: " + ++chunkIndex);
	console.log("-----------------------------------------");
	// console.log(chunk.toString());
	console.log(chunk);
	console.log("\n");
});



//4
process.on("exit", () => console.log("Exit"));
process.on("beforeExit", () => console.log("Before Exit"));
process.on('uncaughtException', () => {
	console.log('Exception');
	process.exit();
});
throw new Error('Test Error');



//once 



eventEmitter.on("myEvent", data => {
	console.log(data, "- ON");
});

eventEmitter.once("myEvent", data => {
	console.log(data, "- ONCE");
});

eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");




//eventNames()
eventEmitter.on("myEvent", data => console.log(data, "- ON"));
eventEmitter.on("myEvent2", data => console.log(data, "- ON"));
eventEmitter.once("myEvent3", data => console.log(data, "- ONCE"));

console.log(eventEmitter.eventNames());
 eventEmitter.emit("myEvent3", 'EVENT');
console.log(eventEmitter.eventNames());



// removeListener
function func1() {
	console.log("EVENT TRIGGERED");
}

eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent2", func1);

console.log(eventEmitter.eventNames());
eventEmitter.removeListener("myEvent", func1);
console.log(eventEmitter.eventNames());
*/


function func1() {
	console.log("EVENT TRIGGERED");
}

eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent2", func1);

eventEmitter.removeAllListeners();
console.log(eventEmitter.eventNames());