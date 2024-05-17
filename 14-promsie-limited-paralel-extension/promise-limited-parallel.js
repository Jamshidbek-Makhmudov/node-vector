const EventEmitter = require('events');
const waiter = (t) => new Promise((res) => setTimeout(res.bind(null, t), t)); //shuchaki promise yaratb beradi

// add event emitter

class PromiseLimitedParallel extends EventEmitter { //emitter ishlatilganligini sababi resoveni qaytarib turaversin emittersiz qachon hammasi tugasa keyin qaytaradi
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
    execute() { //asosiy method
        const cycle = (resolve) => { //rercrussive chaqirish uchun cycle methodi yaratamiz
            this.#tasks //obshiy tasklardan slice ovoladi
                .slice(this.#currentIdx, this.#currentIdx + this.#concurrency)
                .forEach((task, i) => {
                    task
                        .then(async (res) => {
                            // console.log({ i, task })
                            this.#result[task.idx] = res;
                            this.#running++;
                            this.#completed++;

                            if (this.#completed == this.#tasks.length) { //agar shu true qaytarsa demak tugadi degani va resove qaytaramiz resove bu global resovle
                                //  console.log('COMPLETED!!!!!');
                                resolve(this.#result);
                            }

                            if (this.#running == this.#concurrency) { //agar xozirgi ishlab turgan promiselar soni concurrency ga teng bo'lsa
                                this.#running = 0;

                                this.emit('partial-result', this.#result.slice(this.#currentIdx, this.#currentIdx + this.#concurrency));

                                this.#currentIdx += this.#concurrency;

                                await waiter(2000);
                                //  console.log('CYCLE!!!!!');


                                cycle(resolve);
                            }

                        })
                        .catch(async (err) => {
                            //  console.log({ errrrrr: err })
                            this.#result[i + this.#currentIdx] = err; //error chiqsa result ga yozib qoyamiz
                            this.#currentIdx++;
                            this.#running++;

                            if (this.#completed == this.#tasks.length) { //completed bolsa resolve qaytaramiz
                                resolve(this.#result);
                            }

                            if (this.#running == this.#concurrency) { //agar xozirgi ishlab turgan promiselar soni concurrency ga teng bo'lsa
                                this.#running = 0;
                                this.emit('partial-result', this.#result.slice(this.#currentIdx, this.#currentIdx + this.#concurrency));

                                this.#currentIdx += this.#concurrency;

                                await waiter(2000);
                                //  console.log('CYCLE!!!!!');
                                cycle(resolve);
                            }
                        });

                });
        }

        return new Promise((resolve) => { //execute methodini ozi promise return qiladi
            cycle(resolve)
        })
    }

}



function promiseGenerator(size) {
    const arr = new Array(size);
    let i = 0;
    while (i < size) arr[i++] = waiter(Math.floor(Math.random() * 1000));
    console.log(arr)
    return arr;
}


// new PromiseLimitedParallel(promiseGenerator(24), 5).execute().then(res => {
//     console.log({ res })
// });

const p = new PromiseLimitedParallel(promiseGenerator(24), 5)

p.execute();

p.on('partial-result', (data) => {
    console.log('partial data: ', data);
});