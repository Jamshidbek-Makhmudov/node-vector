const process = require('node:process');
// This promise is created but its rejection is not handled

process.on('uncaughtException', (err, origin) => {
    console.log({ err, origin })
});

const func = () => { throw 'Hello' };
func();

