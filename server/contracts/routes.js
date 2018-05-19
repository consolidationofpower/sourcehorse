const express = require('express');
const routes = express.Router();
const sendJson = require('../util').sendJson;

const model = require('./model');

routes.get('/', (req, res) => {
  model.getContractForUser(req.query.user_id).then(contract => {
    let payload = {
      contract
    };
    sendJson(res, payload);
  });
});

routes.get('/:id', async (req, res) => {
  model.getContractForJob(id).then(contract => {
    let payload = {
      contract
    };
    sendJson(res, payload);
  });
});

routes.post('/', (req, res) => {
  model.createContract(req.params).then(() => {
    let payload = {
      error: false
    };
    sendJson(res, payload);
  }).catch(error => {
    sendJson(res, {error});
  });
});

module.exports = routes;