const db = require('../db')
const util = require('../util')

const users = require('../users');

const JOBS_TABLE = 'jobs'

function create (params) {
  let job = {
    title: params.title,
    description: params.description || '',
    owner_id: params.owner_id,
    duration: util.toInterval(params.duration) || '3 days',
    min_sources: Number(params.min_sources) || 3,
    min_rating: Number(params.min_rating) || 0,
    reward: Number(params.reward) || 1,
    contract_duration: util.toInterval(params.duration) || '3 hours'
  };

  return db(JOBS_TABLE).insert(job).returning("*");
}

function get (id) {
  return db.first().from(JOBS_TABLE).where({id});
}

function getAll () {
  return db.select().from(JOBS_TABLE);
}

async function getAllAskForUser (user_id) {
  let user = await users.model.get(user_id);
  return db.select().from(JOBS_TABLE).where({owner_id: user_id});
}

async function getAllAnswerForUser (user_id) {
  let user = await users.model.get(user_id);
  // this is terrible
  let contracted = (await db.select('job_id').from('contracts')).map((job) => job.job_id);
  return db.select("*").from(JOBS_TABLE).whereNotIn('id', contracted).andWhereNot({owner_id: user_id}).andWhere('min_rating', '<=', user.rating || 5);
}

module.exports = {
  create,
  get,
  getAll,
  getAllAskForUser,
  getAllAnswerForUser
}