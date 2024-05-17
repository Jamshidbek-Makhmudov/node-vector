// Error swallowed

function someFunction(){
    console.log('some logic...')
    throw "err"
}

const p = new Promise((resolve, reject) => {
    resolve('acb');
    someFunction();
});

p.then(console.log).catch(console.error)