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
  model.get(req.params.id).then((sources) => {
    let payload = {
      sources
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });
})

module.exports = routes;