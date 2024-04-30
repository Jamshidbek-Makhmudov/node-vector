// make mydemon executable
// add to ssh

const { spawn } = require('child_process');
const fs = require('fs');

class CustomNodemon {
	constructor(filename) {
		this.filename = filename;
		this.child = null;
		this.run();
	}

	// Kill the child process when the parent process exits
	handleExit() {
		process.on('exit', (code) => {
			if (this.child) {
				console.log(`Child process killed with code: ${code}`);
				this.kill(this.child.pid);
			}
		});
	}

	// Function to kill a process by PID
	kill(pid) {
		try {
			process.kill(pid, 'SIGTERM');
		} catch (error) {
			console.log({ error });
		}
	}

	// Restart the child process
	restart() {
		if (this.child) {
			this.kill(this.child.pid);
			this.child = this.runChild();
		}
	}

	// Pipe child process stdout to parent process stdout
	pipeLogs() {
		this.child.stdout.pipe(process.stdout);
	}

	// Watch for file changes and restart the child process
	watch() {
		fs.watch(this.filename, (eventType, changedFilename) => {
			console.log(`${changedFilename} changed, restarting...`);
			this.restart();
		});
	}

	// Create and spawn the child process
	runChild() {
		const childProcess = spawn('node', [this.filename]);
		console.log('Child process id:', childProcess.pid);
		return childProcess;
	}

	// Run the child process and set up watchers
	run() {
		this.handleExit();

		if (!this.filename) {
			console.error('Filename not provided.');
			return;
		}

		this.child = this.runChild();
		this.watch();
		this.pipeLogs();
	}
}

// Get filename from command line arguments
const filename = process.argv[2];

if (filename) {
	new CustomNodemon(filename);
} else {
	console.error('Filename not provided.');
}
