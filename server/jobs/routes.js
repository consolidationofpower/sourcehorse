const express = require('express');
const routes = express.Router();
const sendJson = require('../util').sendJson;

const model = require('./model');
const sources = require('../sources');
const contracts = require('../contracts');

routes.get('/answer/:user_id', (req, res) => {
  model.getAllAnswerForUser(req.params.user_id).then(jobs => {
    let payload = {
      jobs
    };
    sendJson(res, payload);
  });
});

routes.get('/answer', (req, res) => {
  model.getAll().then(jobs => {
    let payload = {
      jobs
    };
    sendJson(res, payload);
  });
});

routes.get('/ask/:user_id', async (req, res) => {
  let payload = [];
  let jobs = await model.getAllAskForUser(req.params.user_id);
  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i];
    let jobSources = await sources.model.getForJob(job.id);
    let contract = await contracts.model.getForJob(job.id);
    payload.push({
      job,
      sources: jobSources,
      contract
    })
  }
  sendJson(res, payload);
});

routes.post('/', (req, res) => {
  model.create(req.body).then((job) => {
    let payload = {
      job,
      error: false
    };
    sendJson(res, payload);
  }).catch(error => {
    res.status(500);
    sendJson(res, {error});
  });
});

module.exports = routes;