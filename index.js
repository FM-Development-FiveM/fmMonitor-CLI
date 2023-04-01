#!/usr/bin/env node

const {
	restartScript,
	startScript,
	stopScript,
} = require('./scripts/index.js');

const args = process.argv.slice(2);

const [command] = args;

switch (command) {
	case 'start':
		console.log('Starting FM Monitor');

		startScript.run();

		break;

	case 'stop':
		console.log('Stopping FM Monitor');

		break;

	case 'restart':
		console.log('Restarting FM Monitor');

		break;

	default:
		console.log('FM Help Command\n');

		[
			{
				command: 'start',
				description: 'Starts the FM Monitor UI.',
			},
			{
				command: 'stop',
				description: 'Stops the FM Monitor UI.',
			},
			{
				command: 'restart',
				description: 'Restarts the FM Monitor UI.',
			},
		].forEach(({ command, description }) =>
			console.log(`fm ${command} - ${description}`)
		);

		break;
}
