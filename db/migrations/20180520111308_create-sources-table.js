exports.up = function(knex, Promise) {
  return createSourcesTable(knex);
};

exports.down = function(knex, Promise) {
  return dropSourcesTable(knex);
};

function createSourcesTable(knex) {
  let createQuery = `CREATE TABLE sources(
    job_id uuid NOT NULL references jobs(id),
    link TEXT DEFAULT '',
    citation TEXT DEFAULT ''
  )`;
  return knex.raw(createQuery);
}

function dropSourcesTable(knex) {
  let dropQuery = `DROP TABLE sources`;
  return knex.raw(dropQuery);
}