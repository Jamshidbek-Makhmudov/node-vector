Promise.all // --> Promise<Array> | Promise.reject;
Promise.allSettled; // --> Promise<Array> 
Promise.race;  // --> Promise<val>;



const waiter = (t) => new Promise((res) => setTimeout(res, t));


Promise.all = function (arr) {
    const result = new Array(arr.length).fill(0);
    let completed = 0;

    return new Promise((resolve, reject) => {
        arr.forEach((promise, i) => {
            promise
                .then((data) => {
                    console.log({ i, completed })
                    completed++;
                    result[i] = data;

                    if (completed == arr.length) {
                        return resolve(result);
                    }
                })
                .catch(err => {
                    return reject(err);
                });
        });
    });
}


const promises = [waiter(54), waiter(45), waiter(56), waiter(53)];

const start = Date.now();
Promise.all(promises).then(() => console.log('Finished after: ', Date.now() - start));





// - It accepts an array of promises - done
// - It returns a promise - done
// - It returns an array of those promises' returned value
// - It errors if any of the passed in promises fail