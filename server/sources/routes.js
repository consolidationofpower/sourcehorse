const express = require('express');
const model = require('./model');
const sendJson = require('../util').sendJson;

const routes = express.Router();

routes.get('/:job_id', (req, res) => {
  model.getForJob(req.params.job_id).then((sources) => {
    let payload = {
      sources
    };
    sendJson(res, payload);
  });
})

routes.post('/', (req, res) => {
  model.create(req.body).then((source) => {
    let payload = {
      source,
      error: false
    };
    sendJson(res, payload);
  }).catch(error => {
    sendJson(res, {error});
  });
});


module.exports = routes;