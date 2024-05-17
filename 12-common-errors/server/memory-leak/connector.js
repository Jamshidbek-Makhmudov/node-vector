const { EventEmitter } = require('events');

const connector = new EventEmitter();
connector.setMaxListeners(0); // You will be able to attach Indefinitly events

setInterval(() => {
  connector.emit('connected', {
    async get() {
      return 'One'
    }
  });
}, 1000);

module.exports = connector;