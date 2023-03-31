require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const utils = require('./utils');

app.use('/', express.static('build'));

app.get('*', (req, res) => {
	res.sendFile('index.html', {
		root: path.join('build/'),
	});
});

app.listen(process.env.PORT, () => {
	utils.log('FM Monitor UI Started.');
});
