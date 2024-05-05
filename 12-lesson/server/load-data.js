const mongojs = require('mongojs');
const fastify = require('fastify');
const { createHash, pbkdf2Sync, pbkdf2 } = require('crypto');


const db = mongojs('localhost:27017/npm');
const coll = db.collection('modules');
const app = fastify();

for(let i = 0; i < 1000; i++) {
    coll.insert({
        name: 'express',
        modified: new Date(),
})
}
