const EventEmitter = require('events');
// add event emitter

const waiter = (t) => new Promise((res) => setTimeout(res.bind(null, t), t)); //bu shunchaki fake promise yaratish uchun

//pomise larni qabul qiladi va ketma ketlikda execute qiladi
class PromiseLimitedParallelEmitter extends EventEmitter {
    #tasks;
    #concurrency;
    #result;
    #running;
    #currentIdx;
    #completed;

    constructor(tasks, concurrency) {
        super();
        this.#concurrency = concurrency;
        this.#running = 0;
        this.#completed = 0;
        this.#tasks = tasks;
        this.#result = new Array(tasks.length);
        this.#currentIdx = 0;
        this.#tasks.forEach((t, i) => t.idx = i);
    }

    /**
     * 
     * @returns {Promise[]} results
     */
    execute() {
        const cycle = (resolve) => {
            let partialResult = [];
            this.#tasks
                .slice(this.#currentIdx, this.#currentIdx + this.#concurrency)
                .forEach((task, i) => {
                    task
                        .then((res) => {
                            this.#result[task.idx] = res;
                            this.#currentIdx++;
                            this.#running++;
                            this.#completed++;
                            partialResult.push(res);

                            if (this.#completed == this.#tasks.length) {
                                console.log('COMPLETED!!!!!');
                                resolve(this.#result);
                            }

                            if (this.#running == this.#concurrency) {
                                this.#running = 0;
                                console.log('CYCLE!!!!!');
                                this.emit('partiallyDone', partialResult)
                                cycle(resolve);
                            }

                        })
                        .catch((err) => {
                            console.log({ errrrrr: err })
                            this.#result[i + this.#currentIdx] = err;
                            this.#currentIdx++;
                            this.#running++;

                            if (this.#completed == this.#tasks.length) {
                                resolve(this.#result);
                            }

                            if (this.#running == this.#concurrency) {
                                this.#running = 0;
                                cycle(resolve);
                            }
                        });

                });
        }

        return new Promise((resolve) => {
            cycle(resolve)
        })
    }


    execute2() {
        for (let i = 0; i < this.#tasks.length / this.#concurrency; i++) {

        }
    }

}



function promiseGenerator(size) {
    const arr = new Array(size);
    let i = 0;
    while (i < size) arr[i++] = waiter(Math.floor(Math.random() * 1000));
    console.log(arr)
    return arr;
}


const job = new PromiseLimitedParallelEmitter(promiseGenerator(24), 5);

job.execute();
// .then(res => {
//     console.log({ res })
// });

job.on('partiallyDone', (result) => {
    console.log('Got result: ', result);
})