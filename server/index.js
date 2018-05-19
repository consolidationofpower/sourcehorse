const express = require('express');
const app = express();

const jobs = require('./jobs');

app.use('/jobs', jobs.routes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});