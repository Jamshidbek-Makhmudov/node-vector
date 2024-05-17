Promise.resolve(15)
    .then((data) => {
        data = data / 3;
        console.log(data)
        return data;
    }
    ).then(d => {
        d = d * 100;
        console.log(d)

        return d;
    })
    .then(() => {throw Error('Inside promise')})
    .catch((err) => {
        console.error(err);
        return 'Hello'
    })
    .then((msg) => console.log('after', msg))
    .finally(() => {
        console.log('everything is finished');
    })