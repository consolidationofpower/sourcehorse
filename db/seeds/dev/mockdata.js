const USERS_TABLE = 'users'
const JOBS_TABLE = 'jobs'
const CONTRACTS_TABLE = 'contracts'
const SOURCES_TABLE = 'sources'

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex(SOURCES_TABLE).del();
  await knex(CONTRACTS_TABLE).del();
  await knex(JOBS_TABLE).del();
  await knex(USERS_TABLE).del();

  await knex(USERS_TABLE).insert([
    {
      id: 'db0010b5-8b41-4ebd-bf19-04aba31860c0',
      name: 'Joe Schmoe',
      balance: 11,
      rating: 5,
      job_completed: 0
    },
    {
      id: 'db0010b5-8b41-4ebd-bf19-04aba31860c1',
      name: 'Sally Smith',
      balance: 5,
      rating: 4.7,
      job_completed: 34
    },
    {
      id: 'db0010b5-8b41-4ebd-bf19-04aba31860c2',
      name: 'Bill Powers',
      balance: 0,
      rating: 3.5,
      job_completed: 13
    },
  ]);

  await knex(JOBS_TABLE).insert([
    {
      id: 'db0010b5-8b41-4ebd-bf19-04aba31860c0',
      title: 'Decline of the Ottoman Empire',
      description: 'Track the decline of the Ottoman Empire along with the influence of Roman ideals',
      owner_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c0',
      duration: '3 days',
      min_sources: 3,
      min_rating: 3,
      reward: 1.5,
      contract_duration: '3 hours'
    },
    {
      id: 'db0010b5-8b41-4ebd-bf19-04aba31860c1',
      title: 'Another Prompt Title',
      description: 'And its description',
      owner_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c2',
      duration: '3 days',
      min_sources: 5,
      min_rating: 4,
      reward: 3.2,
      contract_duration: '5 hours'
    },
    {
      id: 'db0010b5-8b41-4ebd-bf19-04aba31860c2',
      title: 'And Yet Another',
      description: 'And its description',
      owner_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c2',
      duration: '3 days',
      min_sources: 1,
      min_rating: 2.5,
      reward: 0.7,
      contract_duration: '1 hours'
    }
  ]);

  await knex(CONTRACTS_TABLE).insert([
    {
      owner_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c1',
      job_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c0',
      duration: '1 hours'
    }
  ]);

  await knex(SOURCES_TABLE).insert([
    {
      job_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c0',
      link: 'www.resource_url.com',
      citation: 'Properly, Formatted. Citation Here.'
    },
    {
      job_id: 'db0010b5-8b41-4ebd-bf19-04aba31860c0',
      link: 'www.another_resource.com',
      citation: 'Another, Resource. Citation Here.'
    }
  ]);
};
