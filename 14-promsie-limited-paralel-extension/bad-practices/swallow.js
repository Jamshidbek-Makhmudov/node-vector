// Error swallowed

function someFunction(){
    console.log('some logic...')
    throw "err"
}

const p = new Promise((resolve, reject) => {
    someFunction();
    resolve('acb');
});

p.then(console.log).catch(console.error)