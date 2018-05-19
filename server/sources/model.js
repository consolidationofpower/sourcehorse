const sources = [];

function create(params) {
  let source = {
    jobId: params.jobId,
    link: params.link,
    citation: params.citation
  };
  sources.push(source);
  return Promise.resolve();
}

function get(jobId) {
  return Promise.resolve(sources.filter(source => source.jobId === jobId));
}

exports.create = create;
exports.get = get;