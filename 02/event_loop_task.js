//1
const fs = require('fs');

fs.readFile(__filename, () => {
	console.log('fs.readFile callback');

	setTimeout(() => {
		console.log('Outer setTimeout');

		process.nextTick(() => {
			console.log('process.nextTick inside setTimeout');
		});

		setImmediate(() => {
			console.log('setImmediate inside setTimeout');
		});
	}, 0);

	Promise.resolve()
		.then(() => {
			console.log('Promise inside fs.readFile callback');

			setTimeout(() => {
				console.log('Inner setTimeout inside Promise');

				process.nextTick(() => {
					console.log('process.nextTick inside inner setTimeout');
				});

				setImmediate(() => {
					console.log('setImmediate inside inner setTimeout');
				});
			}, 0);
		});
});


//2
setImmediate(() => {
	console.log('Outer setImmediate');

	process.nextTick(() => {
		console.log('process.nextTick inside outer setImmediate');
	});

	setTimeout(() => {
		console.log('setTimeout inside outer setImmediate');
	}, 0);

	Promise.resolve()
		.then(() => {
			console.log('Promise inside outer setImmediate');

			setImmediate(() => {
				console.log('Inner setImmediate inside Promise');

				process.nextTick(() => {
					console.log('process.nextTick inside inner setImmediate');
				});

				setTimeout(() => {
					console.log('setTimeout inside inner setImmediate');
				}, 0);
			});
		});
});

//3
const fs = require('fs');

setTimeout(() => {
	console.log('Outer setTimeout');

	fs.readFile(__filename, () => {
		console.log('fs.readFile callback inside outer setTimeout');

		process.nextTick(() => {
			console.log('process.nextTick inside fs.readFile callback');
		});

		Promise.resolve()
			.then(() => {
				console.log('Promise inside fs.readFile callback');

				setImmediate(() => {
					console.log('setImmediate inside Promise');

					process.nextTick(() => {
						console.log('process.nextTick inside setImmediate');
					});
				});
			});
	});

	setImmediate(() => {
		console.log('setImmediate inside outer setTimeout');
	});
}, 0);

//4
const fs = require('fs');

fs.readFile(__filename, () => {
	console.log('fs.readFile callback');

	setTimeout(() => {
		console.log('Outer setTimeout inside fs.readFile callback');

		process.nextTick(() => {
			console.log('process.nextTick inside outer setTimeout');
		});

		Promise.resolve()
			.then(() => {
				console.log('Promise inside outer setTimeout');

				setTimeout(() => {
					console.log('Inner setTimeout inside Promise');

					process.nextTick(() => {
						console.log('process.nextTick inside inner setTimeout');
					});
				}, 0);
			});
	}, 0);

	setImmediate(() => {
		console.log('setImmediate inside fs.readFile callback');
	});
});

//5
const fs = require('fs');

Promise.resolve()
	.then(() => {
		console.log('Outer Promise');

		fs.readFile(__filename, () => {
			console.log('fs.readFile callback inside outer Promise');

			process.nextTick(() => {
				console.log('process.nextTick inside fs.readFile callback');
			});

			setTimeout(() => {
				console.log('setTimeout inside fs.readFile callback');
			}, 0);

			Promise.resolve()
				.then(() => {
					console.log('Inner Promise inside outer Promise');

					process.nextTick(() => {
						console.log('process.nextTick inside inner Promise');
					});

					setTimeout(() => {
						console.log('setTimeout inside inner Promise');
					}, 0);
				});
		});
	});
