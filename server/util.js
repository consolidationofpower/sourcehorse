function toInterval(seconds) {
  if (seconds) {
    return `${parseFloat(seconds)} seconds`;
  } else {
    return null;
  }
}

function sendJson(res, payload) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(payload));
}

exports.toInterval = toInterval;
exports.sendJson = sendJson;