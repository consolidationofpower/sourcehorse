const db = require('../db')
const util = require('../util')

const JOBS_TABLE = 'jobs'

function createJob (params) {
  let job = {
    title: params.title,
    description: params.description || '',
    owner_id: params.user_id,
    duration: util.toInterval(params.duration) || '3 days',
    min_sources: params.min_sources || 3,
    min_rating: params.min_rating || 0,
    reward: params.reward || 1,
    contract_duration: util.toInterval(params.duration) || '3 hours'
  };

  return db(JOBS_TABLE).insert(job)
}

function getJobs () {
  return db.select().from(JOBS_TABLE)
}

function getJob (id) {
  return db.select().from(JOBS_TABLE).where({id})
}

exports.createJob = createJob;
exports.getJobs = getJobs;
exports.getJob = getJob;