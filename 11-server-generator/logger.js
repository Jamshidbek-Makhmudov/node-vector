const { localStorage } = require('./async-local-storage')

module.exports = {
    logger: {
        info: (message) => {
            console.log({ level: 'info', message });
        },
        debug: (message) => {
            console.log({
                level: 'debug',
                'x-request-id': localStorage.getStore().get('x-request-id'),
                userId: localStorage.getStore().get('user')?.id || null,
                message
            });
        }
    }
}