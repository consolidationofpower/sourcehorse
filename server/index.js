const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

// Modules
const jobs = require('./jobs');
const users = require('./users');
const sources = require('./sources');

const app = express();

app.use(bodyParser());

app.use('/jobs', jobs.routes);
app.use('/users', users.routes);
app.use('/sources', sources.routes);

app.listen(5000, () => {
  console.log('Sourcehorse listening on port 5000!');
});