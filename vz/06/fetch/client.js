const http = require('node:http');

// Custom fetch function
function fetch(url, options) {
	return new Promise((resolve, reject) => {
		const { protocol } = new URL(url);

		const lib = protocol === 'https:' ? require('https') : require('http');

		const req = lib.request(url, options, (response) => {
			let body = '';

			response.on('data', (chunk) => {
				body += chunk;
			});

			response.on('end', () => {
				try {
					resolve({
						status: response.statusCode,
						statusText: response.statusMessage,
						headers: response.headers,
						json: () => JSON.parse(body),
						text: () => body,
					});
				} catch (error) {
					resolve({
						status: response.statusCode,
						statusText: response.statusMessage,
						headers: response.headers,
						json: () => null,
						text: () => body,
					});
				}
			});
		});

		req.on('error', (error) => {
			reject(error);
		});

		if (options.body) {
			req.write(options.body);
		}

		req.end();
	});
}

//bpdy part
const postData = JSON.stringify({
	'msg': 'Hello World!',
});

const url = 'http://localhost:3000';


fetch(url, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': Buffer.byteLength(postData),
	},
	body: postData,
})
	.then(response => response.json())
	.then(json => console.log(json))
