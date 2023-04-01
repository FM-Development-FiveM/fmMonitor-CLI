// const path = require('path');

const { exec } = require('child_process');

const path = 'E:\\Projects\\fmMonitor\\fmMonitor-CLI';

module.exports.run = () => {
	exec(
		`cd E: && cd ${path} && npm run start`,
		{ shell: true },
		(err, stdout, stderr) => {
			if (err) {
				console.error(`exec error: ${err}`);

				return;
			}

			console.log(`stdout: ${stdout}`);
		}
	);
};
