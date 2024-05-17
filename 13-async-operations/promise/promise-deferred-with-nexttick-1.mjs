/* eslint handle-callback-err: 0 */
import { readFile } from 'fs'

const cache = new Map()

function consistentReadAsync(filename, callback) {
  if (cache.has(filename)) {
    // deferred callback invocation
    return cache.get(filename)
    // process.nextTick(() => callback(cache.get(filename)))
  } else {
    // asynchronous function
    readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data)
      callback(data)
    })
  }
}


