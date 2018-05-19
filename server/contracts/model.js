const db = require('../db')
const util = require('../util')

const users = require('../users');
const jobs = require('../jobs');

const CONTRACTS_TABLE = 'contracts'

async function createContract (params) {
  let user = await users.model.getById(params.user_id);
  let job = await jobs.model.getJob(params.job_id);
  let contract = {
    job_id: job.id,
    owner_id: user.id,
    created_at: Date.now(),
    duration: job.contract_duration,
    completed_at: null,
    failed_at: null
  };

  return db(CONTRACTS_TABLE).insert(contract);
}

function getContractForUser (id) {
  return db.select().from(CONTRACTS_TABLE).where({owner_id: id});
}

function getContractForJob (id) {
  return db.select().from(CONTRACTS_TABLE).where({job_id: id});
}

exports.createContract = createContract;
exports.getContractForUser = getContractForUser;
exports.getContractForJob = getContractForJob;