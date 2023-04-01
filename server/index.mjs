import * as dotenv from 'dotenv';

import * as utils from './utils.mjs';

import express from 'express';
import path from 'path';
import open from 'open';

dotenv.config();

const app = express();

app.use('/', express.static('build'));

app.get('*', (req, res) => {
	res.sendFile('index.html', {
		root: path.join('build/'),
	});
});

app.listen(process.env.PORT, async () => {
	utils.log('FM Monitor UI Started.');

	await open('http://localhost:' + process.env.PORT);
});
