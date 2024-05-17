// Create a function which returns sum of two values. When function called multiple times, it shouldn't calculate for the same args.

function sumFactory() {
    const map = new Map();

    return function (a, b) {
        const key = [a, b].join(':');
        if (map.has(key)) {
            console.log('from cache')
            return map.get(key);
        }

        console.log('calculating')
        const sum = a + b;
        map.set(key, sum);
        return sum;
    }
}


const sumFn = sumFactory();

console.log(sumFn(4, 5));
console.log(sumFn(4, 5));

