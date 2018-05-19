exports.up = function(knex, Promise) {
  return createContractsTable(knex);
};

exports.down = function(knex, Promise) {
  return dropContractsTable(knex);
};

function createContractsTable(knex) {
  let createQuery = `CREATE TABLE contracts(
    owner_id uuid NOT NULL references users(id),
    job_id uuid NOT NULL references jobs(id),
    created_at TIMESTAMP DEFAULT current_timestamp,
    duration interval NOT NULL DEFAULT '3 hours',
    completed_at TIMESTAMP,
    failed_at TIMESTAMP
  )`;
  return knex.raw(createQuery);
}

function dropContractsTable(knex) {
  let dropQuery = `DROP TABLE contracts`;
  return knex.raw(dropQuery);
}