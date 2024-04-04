/** createServerdan insatce olib alohida 'request methodi chaqirilganda ishlatish' */
const http = require("node:http");

const server = http.createServer({});

server.on("request", (request, response) => { // bu "request" esa Event
  /**bu yerda request objecto httpdagi incomingMessage classini instanse hisoblanadi. Request objectni metkodlari bor. request readable stream  */
  /**bu yerda response objecto httpdagi ServerResponse classini instanse hisoblanadi.  response writeable steam*/
  console.log("--------- METHOD: ---------");
  console.log(request.method);

  console.log("--------- URL: ---------");
  console.log(request.url);

  console.log("--------- HEADERS: ---------");
  console.log(request.headers);

  console.log("--------- BODY: ---------");

  request.on("data", (chunk) => {
    console.log(chunk.toString("utf-8"));
  });

});

server.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});