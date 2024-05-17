const p = new Promise((resolve) => {
    if (false) resolve();
});


(async () => {
    const t = await p;
    console.log('hi there')
})()