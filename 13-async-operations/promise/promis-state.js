function waiter() {
    return new Promise(resolve => setTimeout(() => {
        console.log(42);
        resolve(42);
    }, Math.floor(Math.random() * 1000)));
}


let val = waiter();

console.log('first');

// setInterval(() => {
//     console.log('Promise status: ', val);

// }, 100);