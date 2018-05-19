const express = require('express');
const routes = express.Router();

const model = require('./model');
const sources = require('../sources');

routes.get('/', (req, res) => {
  model.getJobs(req.query.userId).then(jobs => {
    let payload = {
      jobs
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
});

routes.get('/:id', async (req, res) => {
  let job = await model.getJob(req.params.id);
  let jobSources = await sources.model.get(job.jobId);
  let contract = {};

  let payload = {
    job,
    jobSources,
    contract
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(payload));
});

routes.post('/', (req, res) => {
  model.createJob(req.body).then(() => {
    let payload = {
      error: false
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
});

module.exports = routes;