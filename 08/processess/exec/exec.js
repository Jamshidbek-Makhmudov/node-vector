const { exec, execSync } = require('node:child_process');

// const child = exec('"/path/to/test file/test.sh" arg1 arg2', (err, stdout, stderr) => {
//     console.log({ err });

//     console.log({ stdout })
//     console.log({ stderr })
// });
console.log('PPID: ',  process.ppid)
const child2 = exec('echo $PPID && node ' + 'single.js', (err, stdout, stderr) => {
    console.log({ err });

    console.log({ stdout })
    console.log({ stderr })
});


// Double quotes are used so that the space in the path is not interpreted as
// a delimiter of multiple arguments.

const home = execSync('echo "The \\$HOME variable is $HOME"');

// home.stdout(process.stdout)

// The $HOME variable is escaped in the first instance, but not in the second.