const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

// Modules
const jobs = require('./jobs');
const users = require('./users');
const sources = require('./sources');
const contracts = require('./contracts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/jobs', jobs.routes);
app.use('/users', users.routes);
app.use('/sources', sources.routes);
app.use('/contracts', contracts.routes);

app.listen(5000, () => {
  console.log('Sourcehorse listening on port 5000!');
});