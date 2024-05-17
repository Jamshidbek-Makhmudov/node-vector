// node --trace-events-enabled 03-http-requests-promises.js
// autocannon -d 2 localhost:3000
const {
    createServer
} = require('node:http')

async function fn() { }

createServer(async (request, response) => {
    await fn();
    response.end('hello!')
})
    .listen(3000)
    .on('listening', () => console.log('running at 3000'))