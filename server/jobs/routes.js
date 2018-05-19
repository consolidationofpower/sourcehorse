const express = require('express');
const routes = express.Router();

const model = require('./model');

routes.get('/', (req, res) => {
  model.getJobs().then(jobs => {
    let payload = {
      jobs
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
});

routes.get('/:id', (req, res) => {
  model.getJob(req.params.id).then(job => {
    let payload = {
      job
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
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