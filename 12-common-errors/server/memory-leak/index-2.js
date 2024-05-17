const connector = require('./connector');

function handleServer(req, res) {
   connector.on('connected', async (db) => {
     res.end(await db.get());
   });
}

require('http').createServer(handleServer).listen(3000, console.log('listening on port: 3000'))