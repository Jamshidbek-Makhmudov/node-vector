class EventEmitter { 
	#events;
	#maxListeners;
	constructor() {
		this.#events = {}
		this.#maxListeners = 10;
	}
	/** on */
	on(eventName, listener) {
			if (!this.#events[eventName]) { 
				this.#events[eventName]=[]
			}
			this.#events[eventName].push(listener)
	}
	/**emit */
	emit(eventName, ...args) {
		if (this.#events[eventName]) {
			this.#events[eventName].forEach(l => l(...args))
		 }
	}
	/**once */
	once(eventName, listener) {
		const onlyOnce = (...args) => {
			listener.apply(this, args); //call once
			if (this.#events[eventName]) { //remove after called
				this.#events[eventName] = this.#events[eventName].filter(l => l != onlyOnce)
			 }
		}
		this.on(eventName, onlyOnce)


	}
	/** eventNames*/
	eventNames() {
		return Object.keys(this.#events)
		
	}
	/** addListener*/
	addListener(eventName, listener) {
		return this.on(eventName, listener);
	}
	/**removeListener */


	removeListener(eventName, listener) {
		if (this.#events[eventName]) {
			// Filter out the listener to be removed
			this.#events[eventName] = this.#events[eventName].filter(l => l !== listener);
		}
	}

	/** removeAllListeners */
	removeAllListeners(eventName) {
		if (eventName) {
			delete this.#events[eventName];
		} else {
			this.#events = {};
		}
	}
	
	/** getMaxListeners() */
	getMaxListeners() { 
		return this.#maxListeners;
	}
	/**setMaxListeners() */
	setMaxListeners(n) {
		if (typeof n !== 'number' || n < 0) {
			throw new TypeError('n must be a non-negative number');
		}
		return this.#maxListeners=n
	 }

	
}
evnt = new EventEmitter();
// evnt.on("on", (arg) => { console.log("text1", arg);
// });
// evnt.emit("on", { passord: "pa$$0rd!" });
// //////////////////////////////// //////////////////////////////

// evnt.on("data", data => {
	// 	console.log(data, "- ON");
	// });

	// evnt.once("data", data => {
		// 	console.log(data, "- ONCE");
		// });

		// evnt.emit("data", "Emitted Statement");
		// evnt.emit("data", "Emitted Statement");
		// evnt.emit("data", "Emitted Statement");

		// //////////////////////////////// //////////////////////////////

////eventNames

	// 	evnt.on("on", data => console.log(data, "- ON"));
	// 	evnt.on("on2", data => console.log(data, "- ON"));
	// 	evnt.once("once", data => console.log(data, "- ONCE"));

	// 	console.log(evnt.eventNames());
	// 	evnt.emit("once", 'EVENT');
  //  console.log(evnt.eventNames());




// //////////////////////////////// //////////////////////////////

// removeListener

// evnt.on('myEvent', () => {
// 	console.log('Listener 1 ');
// });
// evnt.on('myEvent', () => {
// 	console.log('Listener 2 ');
// });


// evnt.removeListener('myEvent', () => {
// 	console.log('Listener 1 ');
// });

// console.log(evnt.eventNames()); 


// //////////////////////////////// //////////////////////////////
//removeAllListeners



// evnt.on("myEvent", ()=>console.log('on'));
// evnt.on("myEvent2", ()=>console.log('on'));

// evnt.removeAllListeners();
// console.log(evnt.eventNames());

// //////////////////////////////// //////////////////////////////
//getMaxListeners()

console.log(evnt.getMaxListeners()); 

evnt.setMaxListeners(20);
console.log(evnt.getMaxListeners()); 