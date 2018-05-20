const db = require('../db')
const util = require('../util')

const users = require('../users');
const jobs = require('../jobs');

const CONTRACTS_TABLE = 'contracts'

async function create (params) {
  let user = await users.model.get(params.owner_id);
  let job = await jobs.model.get(params.job_id);
  console.log(user);
  console.log(job);
  let contract = {
    job_id: job.id,
    owner_id: user.id,
    duration: job.contract_duration
  };

  return db(CONTRACTS_TABLE).insert(contract).returning("*");
}

function getForUser (user_id) {
  return db.first().from(CONTRACTS_TABLE).where({owner_id: user_id});
}

function getForJob (job_id) {
  return db.first().from(CONTRACTS_TABLE).where({job_id: job_id});
}

module.exports = {
  create,
  getForUser,
  getForJob
}