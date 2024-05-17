



function printify(data) {
    console.dir({ data });
}

function fcb(data, cb) {
    cb(data);
}


fcb({ name: 'John Wick' }, (d) => {
    console.log({ d })
    fcb('23', (d) => {
        console.log('from 2')
        console.log({ d })

    })
})