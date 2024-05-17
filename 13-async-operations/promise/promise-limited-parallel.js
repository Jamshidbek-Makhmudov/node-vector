class LimitedPromiseExecutor {
    constructor(concurrency) {
      this.concurrency = concurrency;
      this.queue = [];
      this.running = 0;
      this.id = 0;
    }
  
    add(task) {
      // Wrap the task in a promise if it's not already one
      this.queue.push(typeof task === 'function' ? task() : Promise.resolve(task));
      this.runNext.bind;
    }
  
    runNext() {
      if (this.running < this.concurrency && this.queue.length) {
        const task = this.task[this.id++];
        console.log('Started running: ', this.id)
        this.running++;
        task.then((d) => {
            // console.log(d)
          this.running--;
          this.runNext.call(this);
          // process.nextTick(this.runNext.bind(this));
        })
      }
    }
  }
  
  // Usage example
  const executor = new LimitedPromiseExecutor(2); // Run at most 2 tasks concurrently
  
  const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1510)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 1500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 1300)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 1520)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 5'), 130)),
    // () => Promise.reject(new Error('Task 4 failed')), // Example error handling
  ];
  
  tasks.forEach(task => executor.add(task));
  
  
//   executor.queue.forEach(task => task.then(data => console.log(data)));
  // Output: (might vary slightly due to async nature)
  // Task 2
  // Task 1
  // Task 3
  