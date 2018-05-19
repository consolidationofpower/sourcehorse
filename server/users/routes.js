const express = require('express');
const model = require('./model');

const routes = express.Router();

routes.post('/', (req, res) => {
  model.create(req.body).then(() => {
    let payload = {
      error: false
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
});

routes.get('/:id', (req, res) => {
  model.getById(req.params.id).then((users) => {
    let payload = {
      users
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
})

module.exports = routes;