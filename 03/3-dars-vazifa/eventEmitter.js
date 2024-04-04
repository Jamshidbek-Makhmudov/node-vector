class EventEmitter {
  /**
   * @private
   * @type {Record<string | symbol, {once: boolean, cb: (...args: any[]) => void}[]>}
   */
  _events;

  /**
   * @private
   * @type {Record<string | symbol, {once: boolean, cb: (...args: any[]) => void}[]>}
   */
  _preListeners;

  /**
   * @private
   * @type {number}
   */
  _maxListeners;

  constructor() {
    this._events = {};
    this._preListeners = {};
    this._maxListeners = Number.MAX_SAFE_INTEGER;
  }

  // eslint-disable-next-line class-methods-use-this
  _check() {
    if (
      Object.keys(this._events).filter(eventName => this._events[eventName].filter(listener => !listener.once))
        .length >= this._maxListeners
    ) {
      throw new Error(`Max listeners limit. ${this._maxListeners}`);
    }
  }

  /**
   *
   * @param {string | symbol} eventName
   * @param {any[]} args
   * @returns {EventEmitter}
   */
  emit(eventName, ...args) {
    const listeners = this._events[eventName];
    const preListeners = Array.isArray(this._preListeners[eventName]) ? this._preListeners[eventName] : [];
    if (!Array.isArray(listeners)) {
      return this;
    }

    for (const listener of preListeners) {
      listener.cb(args);
    }
    this._preListeners[eventName] = this._preListeners[eventName].filter(listener => !listener.once);

    for (const listener of listeners) {
      listener.cb(args);
    }

    this._events[eventName] = this._events[eventName].filter(listener => !listener.once);
    return this;
  }

  /**
   *
   * @param {string | symbol} eventName
   * @param {(...args: any[]) => void} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    this._check();
    if (Array.isArray(this._events[eventName])) {
      this._events[eventName].push({ cb: listener, once: false });
      return this;
    }

    this._events[eventName] = [{ cb: listener, once: false }];

    return this;
  }

  /**
   *
   * @param {string | symbol} eventName
   * @param {(...args: any[]) => void} listener
   * @returns {EventEmitter}
   */
  once(eventName, listener) {
    if (Array.isArray(this._events[eventName])) {
      this._events[eventName].push({ cb: listener, once: true });
      return this;
    }

    this._events[eventName] = [{ cb: listener, once: true }];

    return this;
  }
  // removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
  // off(eventName: string | symbol, listener: (...args: any[]) => void): this;

  /**
   *
   * @param {string | symbol} eventName
   * @returns {EventEmitter}
   */
  removeAllListeners(eventName) {
    this._events[eventName] = undefined;
  }

  /**
   *
   * @param {number} n
   * @returns {EventEmitter}
   */
  setMaxListeners(n) {
    this._maxListeners = n;
    return this;
  }

  /**
   *
   * @returns {number}
   */
  getMaxListeners() {
    return this._maxListeners;
  }

  /**
   *
   * @param {string | symbol} eventName
   * @returns {Function[]}
   */
  listeners(eventName) {
    return Array.isArray(this._events[eventName]) ? this._events[eventName] : [];
  }

  /**
   *
   * @param {string | symbol} eventName
   * @param {(...args: any[]) => void} listener
   * @returns {EventEmitter}
   */
  prependListener(eventName, listener) {
    if (Array.isArray(this._preListeners[eventName])) {
      this._preListeners[eventName].push({ cb: listener, once: false });
      return this;
    }

    this._preListeners[eventName] = [{ cb: listener, once: false }];

    return this;
  }

  /**
   *
   * @param {string | symbol} eventName
   * @param {(...args: any[]) => void} listener
   * @returns {EventEmitter}
   */
  prependOnceListener(eventName, listener) {
    if (Array.isArray(this._preListeners[eventName])) {
      this._preListeners[eventName].push({ cb: listener, once: true });
      return this;
    }

    this._preListeners[eventName] = [{ cb: listener, once: true }];

    return this;
  }

  /**
   * @returns {Array<string | symbol>}
   */
  eventNames() {
    return Object.keys(this._events);
  }
}

const e = new EventEmitter();

// e.setMaxListeners(0);

e.on('onData', d => {
  console.log(`onData: ${JSON.stringify(d)}`);
});
e.once('onceData', d => {
  console.log(`onceData: ${JSON.stringify(d)}`);
});

e.prependListener('onData', d => {
  console.log(`onData prependListener: ${JSON.stringify(d)}`);
});
e.prependOnceListener('onData', d => {
  console.log(`onData prependOnceListener: ${JSON.stringify(d)}`);
});

e.prependListener('onceData', d => {
  console.log(`onceData prependListener: ${JSON.stringify(d)}`);
});
e.prependOnceListener('onceData', d => {
  console.log(`onceData prependOnceListener: ${JSON.stringify(d)}`);
});

console.log('asdf listeners: ', e.listeners('asdf'));
console.log('onData listeners: ', e.listeners('onData'));
console.log('onceData listeners: ', e.listeners('onceData'));
console.log(e.getMaxListeners());

console.log('<<<<<<<<<<<<<<<<<<<<<<=================================>>>>>>>>>>>>>>>>>>>>>>');
e.emit('onData', { message: 'this is on data message 1', data: 'Some data 1' });
console.log('=============================================');
e.emit('onData', { message: 'this is on data message 2', data: 'Some data 2' });
console.log('=============================================');
e.emit('onceData', { message: 'this is once data message 1', data: 'Some data 1' });
console.log('=============================================');
e.emit('onceData', { message: 'this is once data message 2', data: 'Some data 2' });
console.log('<<<<<<<<<<<<<<<<<<<<<<=================================>>>>>>>>>>>>>>>>>>>>>>');

e.removeAllListeners('onData');
console.log('onData', e.listeners('onData'));
console.log('onceData', e.listeners('onceData'));
console.log(e.getMaxListeners());
