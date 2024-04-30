const os = require('os');
const { now } = require('perf_hooks').performance;
console.log('Im called')

const beforePriority = now();
for (let i = 0; i < 1e2; i++) { }
console.log(now() - beforePriority)

os.setPriority(19)


const afterPriority = now();
for (let i = 0; i < 1e10; i++) { }
console.log(now() - afterPriority)