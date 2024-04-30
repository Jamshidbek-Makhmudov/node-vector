
process.on('exit', (code) => {
    console.log(`Child  process killed with code: ${code}`)
})

setInterval(() => {
    console.log('acbd: ', process.pid)
}, 400);

