
function arrayPush(size) {
    const arr = [];
    let i = 1;
    while (i <= size) arr.push(i++);
    return arr;
}

function arrSize(size) {
    const arr = new Array(size);
    let i = 0;
    while (i < size) arr[i] = ++i;
    return arr;
}


// console.time('arrayPush');
// arrayPush(1e6);
// console.timeEnd('arrayPush');



console.time('arrSize');
arrSize(1e6);
console.timeEnd('arrSize');
