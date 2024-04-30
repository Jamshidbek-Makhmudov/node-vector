console.log(`My processId: ${process.pid}`)
setTimeout(() => {
    console.log(process.argv)
    console.log(`Hello from ${process.argv[2]}!`);
}, 1_000);