const users = [];
let userCounter = 0;

function incrementCounter() {
  userCounter += 1;
}

function create(params) {
  let user = {
    name: params.name,
    rating: 0,
    jobsCompleted: 0,
    balance: 0,
    userId: String(userCounter)
  };
  incrementCounter();
  users.push(user);
  return Promise.resolve();
}

function getById(id) {
  console.log('users', users);
  return Promise.resolve(users.find(user => user.userId === id));
}

exports.create = create;
exports.getById = getById;