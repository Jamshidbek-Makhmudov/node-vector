// constructor should accept promises array and concurrency limit
// all results must be returned after all promises completed.
// if a promise rejected, just return err
/**api bir vaqtning ozida faqat 4ta request qabul qiladi qanday yechim taklif qilasiz? */


class LimitedParallel {
    #tasks; //umumiy promiselar soni bolsa kerak
    #concurrency; //promise lar 40 ta bolsa concurency 4ta bolsa demak 10ta qadamda ishga tushish kerak, ketma-ketlikda
    #results;
    #currentIdx;
    #completed;

    constructor(tasks, options) {
        const { concurrency } = options;
        this.#tasks = tasks;
        this.#results = new Array(this.#tasks.length);
        this.#currentIdx = 0;
    }

    execute() {
        const cycle = () => {
            const promises = this.#tasks.slice(this.#currentIdx, this.#currentIdx + this.#concurrency);
            /**1-loop da 0dan 4gacha 2-loopda 5-8gacha va hokazo aylanadi obshiy 40ta gacha*/

            promises.forEach((p, i) => {
                p.then((res) => this.#results[this.#currentIdx + i] = res);
            });
            this.#currentIdx += this.#concurrency;
        }

        while(this.#currentIdx < this.#tasks - this.#concurrency) {
            cycle()
        }

    }
}

