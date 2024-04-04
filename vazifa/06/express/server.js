const http = require("node:http");

class Express {
	#server;
	#routes;

	constructor() {
		this.#routes = {};
		this.createServer();
	}

	use(url, handler) {
		this.#routes[url] = {
			...this.#routes[url],
			all: handler
		};
		return this;
	}

	get(url, handler) {
		this.#routes[url] = {
			...this.#routes[url],
			get: handler
		};
		return this;
	}

	post(url, handler) {
		this.#routes[url] = {
			...this.#routes[url],
			post: handler
		};
		return this;
	}

	all(url, handler) {
		this.#routes[url] = {
			...this.#routes[url],
			all: handler
		};
		return this;
	}

	createServer() {
		this.#server = http.createServer(this.#serverHandler.bind(this));
	}

	#notFound(request, response) {
		response.statusCode = 404;
		response.end('Not found: ' + request.url);
	}

	#errorHandler(request, response) {
		response.statusCode = 500;
		response.end('Server error!');
	}

	#serverHandler(request, response) {
		const { method, url } = request;
		const routeHandlers = this.#routes[url] || {};

		const allHandler = routeHandlers.all;
		const handler = routeHandlers[method.toLowerCase()];

		response.status = (statusCode) => {
			response.statusCode = statusCode;
			return response;
		};

		response.json = (data) => {
			response.setHeader('Content-Type', 'application/json');
			response.end(JSON.stringify(data));
		};

		response.send = (data) => {
			if (typeof data === 'object') {
				response.setHeader('Content-Type', 'application/json');
				response.end(JSON.stringify(data));
			} else if (typeof data === 'string') {
				response.setHeader('Content-Type', 'text/plain');
				response.end(data);
			} else {
				response.end();
			}
		};

		if (allHandler) {
			try {
				const result = allHandler(request, response);
				if (result !== undefined) {
					response.send(result);
				}
				return;
			} catch (error) {
				return this.#errorHandler(request, response);
			}
		}

		if (handler) {
			try {
				const result = handler(request, response);
				if (result !== undefined) {
					response.send(result);
				}
				return;
			} catch (error) {
				return this.#errorHandler(request, response);
			}
		}

		this.#notFound(request, response);
	}

	listen(port, cb) {
		this.#server.listen(port, cb);
		return this;
	}
}

const app = new Express();

app.get('/', (request, response) => {
	response.send([
		{
			title: 'Design patterns'
		},
		{
			title: 'System design'
		}
	]);
});

//post
app.post('/', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

app.all('/*', (req, res) => {
	res.status(404).json({ message: '404 not found' });
});

app.listen(3000, () => {
	console.log('Server is listening on port: 3000');
});
