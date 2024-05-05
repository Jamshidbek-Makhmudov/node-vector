const fastify = require('fastify');
const fs = require('fs');

const app = fastify();


app.get('/', (req, reply) => {
    fs.readFileSync(__filename);
});



app.listen({port: 3000}, () => console.log('server is listening on port: 3000'))