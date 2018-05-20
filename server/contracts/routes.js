const express = require('express');
const routes = express.Router();
const sendJson = require('../util').sendJson;

const model = require('./model');

routes.get('/:user_id', async (req, res) => {
  model.getForUser(req.params.user_id).then(contract => {
    let payload = {
      contract
    };
    sendJson(res, payload);
  });
});

routes.post('/', (req, res) => {
  model.create(req.body).then((contract) => {
    let payload = {
      contract,
      error: false
    };
    sendJson(res, payload);
  }).catch(error => {
    sendJson(res, {error});
  });
});

module.exports = routes;