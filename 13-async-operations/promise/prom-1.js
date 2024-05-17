function fp() {
    return Promise.resolve(42);
}

function f() {
    return 42;
}

(async () => {
    console.log(await fp())
    console.log(f())
})()