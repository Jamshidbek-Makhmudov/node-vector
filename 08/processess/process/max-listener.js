const events = require('events');

events.defaultMaxListeners = 1;
process.on('foo', () => { });
process.on('foo', () => { });


