const db = require('../db')
const util = require('../util')

const SOURCES_TABLE = 'sources'

function create (params) {
  let source = {
    job_id: params.job_id,
    link: params.link,
    citation: params.citation
  };

  return db(SOURCES_TABLE).insert(source)
}

function get (job_id) {
  return db.select().from(SOURCES_TABLE).where({job_id: job_id});
}

exports.create = create;
exports.get = get;