import { setTimeout as setTimeout2} from 'timers/promises';

const cancelTimeout = new AbortController();
// cancelTimeout.signal.throwIfAborted()

async function timeout() {
    try {
        await setTimeout2(2500, undefined, { signal: cancelTimeout.signal });
        console.log('promise!')
    } catch (err) {
        console.error('{ err }');
        // Ignore rejections here
    }

}

setTimeout(() => {
    console.log('timeout!')
    cancelTimeout.abort();
}, 3000);


timeout();