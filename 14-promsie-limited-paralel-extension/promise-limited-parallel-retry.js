
// add event emitter

class PromiseLimitedParallelRetry {
    #tasks;
    #concurrency;
    #result;
    #running;
    #currentIdx;
    #completed;
    #retryList;
    #retryCount;


    /**
     * @typedef {Object} Options
     * @property {number} concurrency - concurrency
     * @property {number} retryCount - number of retries after promies failed
     */

    /**
     * 
     * @param {Promise[]} tasks tasks to be executed
     * @param {Options} options 
     */
    constructor(tasks, options) {
        const { concurrency, retryCount } = options;
        this.#concurrency = options.concurrency;
        this.#running = 0;
        this.#completed = 0;
        this.#tasks = tasks;
        this.#result = new Array(tasks.length);
        this.#currentIdx = 0;
        this.#tasks.forEach((t, i) => t.idx = i);
        this.#retryList = [];
        this.#retryCount = retryCount;
    }


    /**
     * 
     * @returns {Promise[]} results
     */
    execute() {
        const cycle = (resolve) => {
            this.#tasks
                .slice(this.#currentIdx, this.#currentIdx + this.#concurrency)
                .forEach((task, i) => {
                    task
                        .then((res) => {
                            console.log({ i, task })
                            this.#result[task.idx] = res;
                            this.#currentIdx++;
                            this.#running++;
                            this.#completed++;

                            if (this.#completed == this.#tasks.length) {
                                console.log('COMPLETED!!!!!');
                                resolve(this.#result);
                            }

                            if (this.#running == this.#concurrency) {
                                this.#running = 0;
                                console.log('CYCLE!!!!!');
                                cycle(resolve);
                            }

                        })
                        .catch((err) => {
                            this.#retryList.push(task);
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

const waiter = (t) => new Promise((res) => setTimeout(res.bind(null, t), t));


function promiseGenerator(size) {
    const arr = new Array(size);
    let i = 0;
    while (i < size) arr[i++] = waiter(Math.floor(Math.random() * 1000));
    console.log(arr)
    return arr;
}


new PromiseLimitedParallel(promiseGenerator(24), 5).execute().then(res => {
    console.log({ res })
});