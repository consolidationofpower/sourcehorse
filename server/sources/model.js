const sources = [];

function create(params) {
  let source = {
    job_id: params.job_id,
    link: params.link,
    citation: params.citation
  };
  sources.push(source);
  return Promise.resolve();
}

function get(job_id) {
  return Promise.resolve(sources.filter(source => source.job_id === job_id));
}

exports.create = create;
exports.get = get;