// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//     rl.close();
// });



const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
/**
 * @export function createInterface(
        input: NodeJS.ReadableStream,
        output?: NodeJS.WritableStream,
        completer?: Completer | AsyncCompleter,
        terminal?: boolean,
    ): Interface;
 */
rl.question("What do you want to create? \n type: ", (answer) => {
    //todo: log the answer in a database
    console.log(`thank you ${answer} created successfully`);

});