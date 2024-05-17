// node --trace-events-enable
// node --trace-event-categories v8,node,node.async_hooks 

// put async
// put await

let c = 0;
setInterval(async () => {
    for (let i = 0; i < 1e9; i++) { }
    await console.log('test')
    if (++c == 10) process.exit();
});
