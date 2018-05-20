const IS_PRODUCTION = false;

export default {
  /**
   * @param {string} userId 
   */
  getJobs() {
    return get(`/jobs/answer`);
  },

  /**
   * @param {string} jobID 
   */
  getJob(jobID) {
    return get(`/jobs/${jobID}`);
  },

  /**
   * @param {Job} job 
   */
  submitJob(job) {
    return post("/jobs", job);
  },

  /**
   * @param {string} jobID 
   */
  acceptJob(jobID) {
    return post(`/jobs/${jobID}/accept`, {});
  },

  /**
   * @param {string} jobID 
   * @param {Source[]} sources 
   */
  submitSources(jobID, sources) {
    return post(`/jobs/${jobID}/sources`, sources);
  }
}

function get(endpoint) {
  return request(`http://localhost:5000${endpoint}`);
}

function post(path, data) {
  return request(`http://localhost:5000${path}`, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  });
}

function request(...args) {
  return fetch(...args)
    .then(logResponse)
    .then(r => r.json());
}

function logResponse(r) {
  console.log(`${r.url}: ${r.status} ${r.statusText}`);
  return r;
}