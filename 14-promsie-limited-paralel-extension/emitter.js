const { EventEmitter, once } = require('events')
const { promisify } = require('util')

const foo = new EventEmitter()
const sleep = promisify(setTimeout)

async function run () {
  console.time('emitter')
  await once(foo, 'something')
  console.timeEnd('emitter')

  await sleep(100)
  console.log('done')
//   functionThatDoesNotExist() 
}

run().catch(console.log)

setTimeout(() => {
    // foo.emit('something')
}, 15000)
