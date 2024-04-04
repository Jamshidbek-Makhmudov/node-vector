const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();


class MyEmitter {
    #events = {}
    constructor(){}
    on(eventName, cb) {
        if (Array.isArray(this.#events[eventName])) {
            this.#events[eventName].push(cb);
        } else {
            this.#events[eventName] = [cb];
        }
    }

    emit(event, data) {
        this.#events[event].forEach(f => f(data));
    }
}

const ev = new MyEmitter();

ev.on('data', (data) => console.log('Data was received: ', data));
ev.emit('data', {
    name: 'John Doe',
    age: 25
});



// class MyEventEmitter {
// 	events = {};
// 	on(eventName, cb) {
// 		this.events[eventName] = cb;
// 	}

// 	emit(eventName, ...args) {
// 		this.events[eventName](args);
// 	}
// }

// const e = new MyEventEmitter();

// e.on('a', (args) => {
// 	console.log(args);
// });

// e.emit('a', 12, 21);























class CustomEmitter {
    #events = {}
    constructor() {
    }

    on(eventName, cb) {
        const event = this.#events[eventName];
        if (Array.isArray(event)) {
            this.#events[eventName].push(cb);
        } else {
            this.#events[eventName] = [cb];
        }

        return this;
    }

    // implement once

    emit(eventName, ...args) {
        this.#events[eventName].forEach(cb => cb(args));
        return this;
    }

    listenerCount(eventName) {
        return Array.isArray(this.#events[eventName]) ? this.#events[eventName].length : 0;
    }
}
