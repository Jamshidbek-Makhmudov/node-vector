const controller = new AbortController();

// После создания экземпляра AbortController, можно получить экземпляр AbortSignal, используя свойство signal:

const signal = controller.signal;

// Имитация отмены запроса через 3 секунды

setTimeout(() => {
  controller.abort();
}, 300);

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