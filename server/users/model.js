const db = require('../db');

const USERS_TABLE = 'users';

function create(params) {
  let user = {
    name: params.name,
    balance: 0,
    rating: 0,
    job_completed: 0
  };
  return db(USERS_TABLE).insert(user);
}

function getById(id) {
  return db.select().from(USERS_TABLE).where({id})
}

module.exports = {
  create,
  getById
}