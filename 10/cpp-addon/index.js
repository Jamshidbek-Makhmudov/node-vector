const myAddon = require("./build/Release/node_addon_example.node");

const greeting = myAddon.sayMyName("Husniddin");

console.log(greeting);