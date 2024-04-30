const { exec, execSync, spawn, ChildProcess } = require('node:child_process');

// const child = exec('"/path/to/test file/test.sh" arg1 arg2', (err, stdout, stderr) => {
//     console.log({ err });

//     console.log({ stdout })
//     console.log({ stderr })
// });

// const child1 = exec('./script.sh', (err, stdout, stderr) => {
//     console.log({ err });

//     console.log(stdout)
//     console.log({ stderr })
// });


console.log(__filename + ' files is called')
const child2 = exec(`node ${__dirname}/single.js`, (err, stdout, stderr) => {
    console.log({ err });

    console.log({ stdout })
    console.log({ stderr })
});


const ch = spawn('echo', ['$0']);
// const ch = spawn('echo', ['$0']);

ch.stdout.pipe(process.stdout);