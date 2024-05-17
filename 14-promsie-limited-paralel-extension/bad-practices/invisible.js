const p = new Promise((resolve) => {
    let condition = true;
    if (condition) resolve();
});


(async () => {
    p.then(() => {
        console.log('hi there')
    });
})()