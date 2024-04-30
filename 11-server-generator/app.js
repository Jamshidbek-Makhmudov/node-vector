

const app = require('express')();

const { localStorage } = require('./async-local-storage')

const { logger } = require('./logger');

app.use((req, res, next) => {
    const store = new Map();
    const id = require('crypto').randomUUID();
    store.set('x-request-id', id);
    localStorage.run(store, () => {
        logger.debug('inside middleware');
        next()
    })
});

function doSomeLogic() {
    logger.info('inside doSomeLogic')
    logger.debug('User has no enough funds');
}

app.get('/', (req, res) => {
    localStorage.getStore().set('user', {
        id: Math.floor(Math.random() * 1000),
        name: 'John',
        role: 'admin'
    });

    logger.debug('inside get');
    doSomeLogic();
    setTimeout(() => {
        res.send('ok');
    }, Math.floor(Math.random() * 1000))
})


app.listen(3000, () => console.log('listening on port: 3000'));