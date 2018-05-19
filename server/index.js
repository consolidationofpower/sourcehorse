const express = require('express');
const bodyParser = require('body-parser');

// Modules
const jobs = require('./jobs');

const app = express();

app.use(bodyParser());

app.use('/jobs', jobs.routes);

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});