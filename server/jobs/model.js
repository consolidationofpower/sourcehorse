const jobs = [];


function createJob (prompt) {
  return new Promise((resolve, reject) => {
    let job = {
      prompt
    };
    jobs.push(job);
    resolve(job);
  })
}

function getJobs () {
  return Promise.resolve(jobs);
}


exports.createJob = createJob;
exports.getJobs = getJobs;