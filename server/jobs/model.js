const jobs = [{
  jobId: '1',
  prompt: 'Discuss the arrival of the first polynesians in New Zealand',
  ownerId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  createdAt: '2018-05-19',
  duration: 86400,
  minSources: 8,
  minRating: 2,
  reward: 8,
  contractDuration: 86400
}];

let count = 1000;

function createJob (params) {
  return new Promise((resolve, reject) => {
    let job = {
      jobId: String(count++),
      prompt: params.prompt,
      ownerId: params.userId,
      createdAt: Date.now(),
      duration: params.duration || 259200, // 3 days
      minSources: params.minSources || 3,
      minRating: params.minRating || 3,
      reward: params.reward,
      contractDuration: params.contractDuration || 10800 // 3 hours
    };
    jobs.push(job);
    resolve(job);
  })
}

function getJobs () {
  return Promise.resolve(jobs);
}

function getJob (jobId) {
  return Promise.resolve(jobs.find(job => job.jobId === jobId));
}


exports.createJob = createJob;
exports.getJobs = getJobs;
exports.getJob = getJob;