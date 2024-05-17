setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'))
setImmediate(() => console.log('setImmediate'));
queueMicrotask(() => console.log('queuemicrotask'))
process.nextTick(() => console.log('nextTick'));

