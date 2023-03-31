#!/usr/bin/env node

const args = process.argv.slice(2);

const [command] = args;

switch (command) {
	case 'start':
		console.log('Starting FM Monitor');

		break;

	case 'stop':
		console.log('Stopping FM Monitor');

		break;

	case 'restart':
		console.log('Restarting FM Monitor');

		break;

	default:
		console.log('FM Help Command');

		break;
}
