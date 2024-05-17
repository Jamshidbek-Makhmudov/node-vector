async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(resolve.bind(null, [34, 21, 85, 94, 73]), 300);
    });
}

function double(items) {
    console.log('double')
    return items.map(val => val * 2);
}

function divide(items) {
    console.log('divide')
    return items.map(val => val / 5);
}

function print(items) {
    console.log('Final result: ', items);
}

fetchData()
    .then(double)
    .then(divide)
    .then(print);