/** qo'l bola express */
const http = require("node:http");

/**
 * routes
 * handlers
 * middlewares
 */

class Express {
    #server
    #routes
    constructor() {
        this.#routes = {};
        this.createServer();
    }

    use(url, handler) {
        this.#routes[url] = {
            all: handler // use() method
        }

        return this;
    }

    get(url, handler) {
        this.#routes[url] = handler;

        const routes = {
            '/users/books': {
                get: () => { },
                post: () => { }
            }
        }

        return this;
    }

    post() {

        return this;
    }

    createServer() {
        this.#server = http.createServer(this.#serverHandler);
    }

    #notFound(request, response) {
        response.statusCode = 404;
        response.end('Not found: ', request.url);
    }

    #errorHandler(request, response) {
        response.statusCode = 500;
        response.end('Server error!');
    }

    #serverHandler(request, response) {
        console.log(request)
        console.log(request.method);
        console.log(request.url);

        const { method, url } = request;

        const allHandler = this.#routes?.[url]?.['all'];
        const handler = this.#routes?.[url]?.[method];

        if (allHandler) {
            try {
                const result = allHandler(request, response);
                response.statusCode(200);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            } catch (error) {
                return this.#errorHandler(request, response);
            }
        }

        if (handler) {
            try {
                const result = handler(request, response);
                response.statusCode(200);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            } catch (error) {
                return this.#errorHandler(request, response);
            }
        }


        return this.#notFound(request, response);
    }

    listen(port, cb) {
        this.#server.listen(port, cb);
        return this;
    }
}

const app = new Express();

app.get('/users/books', (request, response) => {
    return [
        {
            title: 'Design patterns'
        },
        {
            title: 'System design'
        }
    ]
})

app.listen(3000, console.log('Server is listening on port: 3000'))
