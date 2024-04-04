class MyEmitter {
  /**
   * @type {Map<string, Array>}
   */
  #events = new Map();
  #once = Symbol();
  #maxListeners = 10;

  addListener(eventName, listener) {
    return this.on(eventName, listener);
  }

  emit(eventName, ...args) {
    if (!this.#events.has(eventName)) {
      return false;
    }

    const listeners = this.#events.get(eventName);

    this.#events.set(
      eventName,
      listeners.filter((listener) => {
        listener(...args);

        if (listener[this.#once]) return false;

        return true;
      })
    );

    return true;
  }

  eventNames() {
    return Array.from(this.#events.keys());
  }

  getMaxListeners() {
    return this.#maxListeners;
  }

  listenerCount(eventName, listener) {
    if (!this.#events.has(eventName)) {
      return 0;
    }

    const listeners = this.#events.get(eventName);

    if (!listener) {
      return listeners.length;
    }

    let listenerFoundTimes = 0;

    listeners.forEach((l) => {
      if (l === listener) {
        listenerFoundTimes++;
      }
    });

    return listenerFoundTimes;
  }

  listeners(eventName) {
    if (!this.#events.has(eventName)) {
      return [];
    }

    return this.#events.get(eventName);
  }

  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }

  on(eventName, listener) {
    if (this.#events.has(eventName)) {
      this.#appendListener(eventName, listener);
    } else {
      this.#events.set(eventName, [listener]);
    }

    return this;
  }

  once(eventName, listener) {
    listener[this.#once] = true;

    return this.on(eventName, listener);
  }

  prependListener(eventName, listener) {
    if (this.#events.has(eventName)) {
      this.#prependListener(eventName, listener);
    } else {
      this.#events.set(eventName, [listener]);
    }

    return this;
  }

  prependOnceListener(eventName, listener) {
    listener[this.#once] = true;

    return this.prependListener(eventName, listener);
  }

  removeAllListeners(eventName) {
    if (!eventName) {
      this.#events.clear();
    } else {
      this.#events.delete(eventName);
    }

    return this;
  }

  removeListener(eventName, listener) {
    if (this.#events.has(eventName)) {
      const listeners = this.#events.get(eventName);

      let filteredListeners = [];
      let found = false;

      for (let i = 0; i < listeners.length; i++) {
        if (!found && listener === listeners[i]) {
          found = true;
        } else {
          filteredListeners.push(listeners[i]);
        }
      }

      this.#events.set(eventName, filteredListeners);

      this.emit("removeListener");
    }

    return this;
  }

  setMaxListeners(n) {
    if (n === 0) n = Infinity;

    this.#maxListeners = n;
  }

  #appendListener(eventName, listener) {
    this.#checkMaxListeners(eventName, listener);
    this.emit("newListener", eventName, listener);
    this.#events.get(eventName).push(listener);
  }

  #prependListener(eventName, listener) {
    this.#checkMaxListeners(eventName, listener);
    this.emit("newListener", eventName, listener);
    this.#events.get(eventName).unshift(listener);
  }

  #checkMaxListeners(eventName, listener) {
    if (this.#events.get(eventName).length + 1 > this.#maxListeners) {
      console.warn(
        `MaxListenersExceededWarning: Possible EventEmitter memory leak detected. ${
          this.#maxListeners + 1
        } ${
          listener.name
        } listeners added to [MyEmitter]. Use emitter.setMaxListeners() to increase limit`
      );
    }
  }
}
