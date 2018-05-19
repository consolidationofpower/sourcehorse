exports.up = function(knex, Promise) {
  return createUsersTable(knex).then(() => {
    return createJobsTable(knex)
  })
};

exports.down = function(knex, Promise) {
  return dropJobsTable(knex).then(() => {
    return dropUsersTable(knex)
  })
};

function createJobsTable(knex) {
  let createQuery = `CREATE TABLE jobs(
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
    title TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT current_timestamp,
    owner_id uuid NOT NULL references users(id),
    duration interval NOT NULL DEFAULT '3 days',
    min_sources smallint NOT NULL DEFAULT 3,
    min_rating real NOT NULL DEFAULT 0,
    reward real NOT NULL DEFAULT 1,
    contract_duration interval NOT NULL DEFAULT '3 hours'
  )`;
  return knex.raw(createQuery);
}

function createUsersTable(knex) {
  let createQuery = `CREATE TABLE users(
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4 (),
    name TEXT,
    balance real NOT NULL DEFAULT 0,
    rating real NOT NULL DEFAULT 0,
    job_completed smallint NOT NULL DEFAULT 0
  )`;
  return knex.raw(createQuery);
}

function dropJobsTable(knex) {
  let dropQuery = `DROP TABLE jobs`;
  return knex.raw(dropQuery);
}

function dropUsersTable(knex) {
  let dropQuery = `DROP TABLE users`;
  return knex.raw(dropQuery);
}