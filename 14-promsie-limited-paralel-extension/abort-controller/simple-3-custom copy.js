class TimeoutAbortController extends AbortController {
    constructor(timeout) {
        super();
        setTimeout(() => {
            console.log('Timeout expired!')
            this.abort();
        }, timeout);
    }
}

const controller = new TimeoutAbortController(300);
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch request aborted');
        } else {
            console.error('Fetch request failed:', error);
        }
    });