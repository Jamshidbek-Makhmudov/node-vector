// Create a function which returns sum of two values. When function called multiple times, it shouldn't calculate for the same args.
function calculate() {
	const map = new Map()
	
	return function (a, b) {
		const key = [a, b].join(":")
		if (map.has(key)) { 
			console.log("from cache");
			
			return map.get(key)
		}
		console.log("new value");
		const value= a+b
		map.set(key, value)
		return value;
	 }
};
const check = calculate()
console.log(check(2,1));
console.log(check(2,1));


// ////
new Promise(function (resolve) {
    console.log('new promise')
    resolve()
}).then(() => {
    console.log('then 1')
})

async function foo() {
    console.log('async function')
}

foo().then(() => {
    console.log('then 2')
})

setImmediate(() => {
    console.log('immediate 1')
})

setTimeout(() => {
    console.log('timeout 1')
})

process.nextTick(() => {
    console.log('nextTick 1')
})

queueMicrotask(() => {
    console.log('microtask 1')
})

setTimeout(() => {
    console.log('timeout 2')
})

setImmediate(() => {
    console.log('immediate 2')
})

process.nextTick(() => {
    console.log('nextTick 2')
})

process.nextTick(() => {
    console.log('nextTick 3')
})

queueMicrotask(() => {
    console.log('microtask 2')
});

//////


