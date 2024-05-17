Promise.resolve(42)
    .then((data) => {
        console.log({ data });
        return data * 2;
    })
    .then((data2) => {
        console.log({ data2 });
        throw Error('something went wrong')
    })
    .catch(err => {
        console.log({ Error: err });
        return 'nnnothing';
    })
    .then((data3) => {
        console.log({ data3 });
    })
    .finally((data4) => {
        console.log('finally')
        console.log({ data4 });
    })