const mongojs = require('mongojs');
const fastify = require('fastify');
const { createHash, pbkdf2Sync, pbkdf2 } = require('crypto');


const db = mongojs('localhost:27017/npm');
const coll = db.collection('modules');
const app = fastify();

console.log({ pid: process.pid })

const myHandler = (req, reply) => {
    coll.find().sort({ modified: -1 }).limit(5, function find1(err, newest) {
        if (err) return reply.code(500).send(err);
        debugger;

        coll.find().sort({ modified: 1 }).limit(5, function find2(err, oldest) {
            if (err) return reply.code(500).send(err);
            const magic = computeMagic(newest, oldest);
            console.log(magic)
            debugger;
            reply.send({ magic, newest, oldest });
        });
    });
};

app.get('/', myHandler);

function computeMagic(a, b) {
    return pbkdf2Sync(JSON.stringify(a), JSON.stringify(b), 4, 128, 'sha512');
}

app.listen({ port: 3000 }, () => console.log('server is listening on port: 3000'))
