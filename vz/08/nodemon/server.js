/** Qo'l bola nodemon  */

/**
 		 nano ~/.zshrc
		 alias customNodemon="/usr/local/bin/node /Users/jamesadams/Desktop/darsliklar/courses/nodejs_advanced/code/server.js"
     source ~/.zshrc
     cat ~/.zshrc
*/
const { spawn } = require('child_process');
const fs = require('fs');


class CustomNodemon {
	#child;
	
	constructor(filename) {
		this.filename = filename;
		this.#child = null;
		this.run();
	}

	handleExit() {
		process.on('exit', (code) => {
				console.log(`Child process killed with code: ${code}`);

		});
	}

	kill(pid) {
		console.log("pid", pid);

		// process bor yoqligini tekshiramiz
		if (this.isProcessRunning(pid)) {
			try {
				process.kill(pid, 'SIGTERM');
			} catch (error) {
				console.log('error from kill: ', { error });
			}
		} else {
			console.log(`Process with PID ${pid} does not exist.`);
		}
	}

	/** berilgan pid bn process ishlamoqdami yoqmi tekshiramiz*/
	isProcessRunning(pid) {
		try {
			process.kill(pid, 0); // 0 signal bilan process bot yoqligini tekshiramiz
			return true;
		} catch (error) {
			return false;
		}
	}

	/**childProcess ni stoutni parentni stoutiga pipe qiladi */
	pipeLogs() {
		this.#child.stdout.pipe(process.stdout);
	}

	/**kill qiladi songra run qiladi */
	restart() {
			this.kill(this.#child.pid);
			this.#child = this.spawn2(); 
		
	}
	/**doimiy kuzatib run qilb turadi */
 watch() {

	fs.watchFile(this.filename, (curr, prev) => {
		console.log(`${this.filename} changed, restarting...`);
		this.restart();
	});

}
	/**child process create qiladi */
	spawn2() {
	return	this.#child = spawn('node', [this.filename]);

	}

	run() {
		this.handleExit();

		if (!this.filename) {
			console.error('Filename not provided.');
			return;
		}

	  this.#child = this.spawn2();
		this.#child.on('exit', (code) => {
			console.log(`Child process exited with code ${code}, restarting...`);
			this.restart();
		});

		this.watch();
		this.pipeLogs();
	}


}
const filename = process.argv[2];

if (filename) {
	new CustomNodemon(filename);
} else {
	console.error('Filename not provided.');
}

