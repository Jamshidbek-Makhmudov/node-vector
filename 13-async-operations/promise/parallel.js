function mapPromises(args, callback, concurrency = 3) {
    const { promise, resolve } = Promise.withResolvers();
    const results = [];
    let cursor = 0;

    function next() {
        if (cursor < args.length) {
            const index = cursor++;

            void callback(...args[index]).then(value => {
                results[index] = { status: 'fulfilled', value };
            }).catch(reason => {
                results[index] = { status: 'rejecte', reason };
            }).then(() => {
                setImmediate(next);
            });
        } else if (args.length === results.length) {
            resolve(results);
        } else {
            // no args remaining, but pending promises - just wait
        }
    }

    while (concurrency--) {
        next();
    }

    return promise;
}



