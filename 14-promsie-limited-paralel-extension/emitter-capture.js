const EventEmitter = require('node:events');
const ee1 = new EventEmitter({captureRejections: true  });
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});


ee1.emit('something');
ee1.on('error', console.log.bind(null, 'abc'));

// const ee2 = new EventEmitter({ captureRejections: true });
// ee2.on('something', async (value) => {
//   throw new Error('kaboom');
// });

// ee2[Symbol.for('nodejs.rejection')] = console.log;