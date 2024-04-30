const obj1 = {
    a: 'b'
};

const myRequire = {
    cache: {
        'modulepath': {
            exports: obj1
        }
    }
}

delete myRequire.cache['modulepath'].exports;

console.log({ obj1, cache: myRequire.cache['modulepath'] })
// console.log({isEqual: obj1 == myRequire.cache['modulepath']})