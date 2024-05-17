let t = () => new Promise(resolve => setTimeout(() => {
    console.log('executed')
    resolve('Task 2')
}, 1500) );