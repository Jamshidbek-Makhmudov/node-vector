// export let bright = (input: any) => '\x1b[1m' + input + '\x1b[0m'
// export let dim = (input: any) => '\x1b[2m' + input + '\x1b[0m'
// export let underscore = (input: any) => '\x1b[4m' + input + '\x1b[0m'
// export let blink = (input: any) => '\x1b[5m' + input + '\x1b[0m'
// export let reverse = (input: any) => '\x1b[7m' + input + '\x1b[0m'
// export let hidden = (input: any) => '\x1b[8m' + input + '\x1b[0m'

// export let black = (input: any) => '\x1b[30m' + input + '\x1b[0m'
// export let red = (input: any) => '\x1b[31m' + input + '\x1b[0m'
// export let green = (input: any) => '\x1b[32m' + input + '\x1b[0m'
// export let yellow = (input: any) => '\x1b[33m' + input + '\x1b[0m'
// export let blue = (input: any) => '\x1b[34m' + input + '\x1b[0m'
// export let magenta = (input: any) => '\x1b[35m' + input + '\x1b[0m'
// export let cyan = (input: any) => '\x1b[36m' + input + '\x1b[0m'
// export let white = (input: any) => '\x1b[37m' + input + '\x1b[0m'
// export let gray = (input: any) => '\x1b[90m' + input + '\x1b[0m'

// export let bgBlack = (input: any) => '\x1b[40m' + input + '\x1b[0m'
// export let bgRed = (input: any) => '\x1b[41m' + input + '\x1b[0m'
// export let bgGreen = (input: any) => '\x1b[42m' + input + '\x1b[0m'
// export let bgYellow = (input: any) => '\x1b[43m' + input + '\x1b[0m'
// export let bgBlue = (input: any) => '\x1b[44m' + input + '\x1b[0m'
// export let bgMagenta = (input: any) => '\x1b[45m' + input + '\x1b[0m'
// export let bgCyan = (input: any) => '\x1b[46m' + input + '\x1b[0m'
// export let bgWhite = (input: any) => '\x1b[47m' + input + '\x1b[0m'
// export let bgGray = (input: any) => '\x1b[100m' + input + '\x1b[0m'
console.dir('\x1b[43m' + 
 {   a: {
        "b": {
            c: {
                d:
                    { e: 'f' }
            }
        }
    }
}.toString() +'\x1b[0m', {
    depth: null,
    showHidden: true,
    colors: true
})