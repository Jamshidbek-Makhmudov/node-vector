const { EventEmitter, once } = require('events');
const { promisify } = require('util');
const foo = new EventEmitter();
const sleep = promisify(setTimeout);
async function run() {
    await once(foo, 'something');
    await sleep(100);
    functionThatDoesNotExist();
}
run().catch(console.log);
foo.emit('something');