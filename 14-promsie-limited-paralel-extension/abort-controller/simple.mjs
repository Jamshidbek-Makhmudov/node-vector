// import { setTimeout } from 'timers/promises';

const cancelTimeout = new AbortController();
const cancelTask = new AbortController();




async function timeout() {
  try {
    await setTimeout(10000, undefined, { signal: cancelTimeout.signal });
    cancelTask.abort();
  } catch {
    // Ignore rejections here
  }
}

async function task() {
  try {
    cancelTask.signal
    // await someLongRunningTask({ signal: cancelTask.signal });
  } finally {
    cancelTimeout.abort();
  }
}

await Promise.race([ timeout(), task() ]);