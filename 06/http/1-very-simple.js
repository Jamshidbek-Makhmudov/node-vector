//**codelarni createServerni ichida callback bn yozish */
const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    console.log('Connected!')
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write('hello')
  res.end(JSON.stringify({ //connection uziladi end qilmasak response yuborilmaydi
    data: 'Hello World!',
  }));
});
/** keepAlive true qilib qoyilsa qayta qayta connection yaratilmaydi bor connrcectiondan foydalaniladi*/
server.listen(8000, () => console.log('listening...'));
/**terminalda curl localhost:8000 
 * curl nima? 
 * javob:  https://chat.openai.com/c/73692927-72a2-4a0d-878f-f3626b678c9e */  