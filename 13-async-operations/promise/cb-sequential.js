function makeSampleTask(name) {
    return (cb) => {
        const timeout = Math.random() * 2000;
        // console.log(`${name} started with timeout: `, timeout);
        setTimeout(() => {
            console.log(`${name} completed in: `, timeout)
            cb()
        }, timeout)
    }
}


const tasks = [
    makeSampleTask('Task1'),
    makeSampleTask('Task2'),
    makeSampleTask('Task3'),
    makeSampleTask('Task4'),
    makeSampleTask('Task5'),
]

function iterate(index) {
    if (index === tasks.length) {
        return finish()
    }
    const task = tasks[index]
    task(() => iterate(index + 1))
}

function finish() {
    // iteration completed
    console.log('All tasks executed')
}

iterate(0)