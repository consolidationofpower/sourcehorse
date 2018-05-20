const express = require('express');
const model = require('./model');
const sendJson = require('../util').sendJson;

const routes = express.Router();

routes.get('/', (req, res) => {
  model.getAll().then((users) => {
    let payload = {
      users
    };
    sendJson(res, payload);
  });
})

routes.get('/:id', (req, res) => {
  model.get(req.params.id).then((user) => {
    let payload = {
      user
    };
    sendJson(res, payload);
  });
})

routes.post('/', (req, res) => {
  model.create(req.body).then((user) => {
    let payload = {
      user,
      error: false
    };
    sendJson(res, payload);
  }).catch(error => {
    sendJson(res, {error});
  });
});

module.exports = routes;