const express = require('express');
const routes = express.Router();
const sendJson = require('../util').sendJson;

const model = require('./model');
const sources = require('../sources');

routes.get('/', (req, res) => {
  model.getJobs(req.query.userId).then(jobs => {
    let payload = {
      jobs
    };
    sendJson(res, payload);
  });
});

routes.get('/:id', async (req, res) => {
  let job = await model.getJob(req.params.id);
  let jobSources = await sources.model.get(job.jobId);
  let contract = {};

  let payload = {
    job,
    sources: jobSources,
    contract
  };
  sendJson(res, payload);
});

routes.post('/', (req, res) => {
  model.createJob(req.body).then(() => {
    let payload = {
      error: false
    };
    sendJson(res, payload);
  }).catch(error => {
    sendJson(res, {error});
  });
});

module.exports = routes;