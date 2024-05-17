function fn() {
    // do some logic
    return new Promise(res => setTimeout(res, Math.floor(Math.random() * 1e4)));
}

const timer = (seconds) => new Promise(res => setTimeout(res, seconds));

function timeouter(fn, timeout) {
    const res = await Promise.race([fn, timer(timeout)]);
    
}