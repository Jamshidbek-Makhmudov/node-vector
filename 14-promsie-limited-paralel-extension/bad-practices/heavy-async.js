async function sumInterval(a, b) {
    let sum = a;
    while (++a <= b) sum += a;
    return sum;
}

function sumInterval(a, b) {
    let sum = a;
    while (++a <= b) sum += a;
    return Promise.resolve(sum);
}



sumInterval(1, 10).then(console.log)