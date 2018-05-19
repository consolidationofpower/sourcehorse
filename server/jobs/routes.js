const express = require('express');
const routes = express.Router();

const model = require('./model');

routes.get('/', (req, res) => {
  /*
  let payload = {
    jobs: [
      {
        prompt: 'Discuss the arrival of the first polynesians in New Zealand',
        owner: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        createdAt: '2018-05-19',
        duration: 86400,
        numSources: 8,
        minRating: 2,
        reward: 8,
        jobId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        contractDuration: 86400
      }
    ]
  };
  */
  model.getJobs().then(jobs => {
    let payload = {
      jobs
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  })
});

routes.get('/:id', (req, res) => {
  let payload = {
    job: {
      prompt: 'Discuss the arrival of the first polynesians in New Zealand',
      owner: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      createdAt: '2018-05-19',
      duration: 86400,
      numSources: 8,
      minRating: 2,
      reward: 8,
      jobId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      contractDuration: 86400
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(payload));
});

routes.post('/', (req, res) => {
  model.createJob(req.body.prompt).then(() => {
    let payload = {
      error: false
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(payload));
  });  
});

module.exports = routes;