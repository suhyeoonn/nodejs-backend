const DB = [];

function register(user) {
  return saveDB(user, (user) => sendEmail(user, getResult));
}

function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

function sendEmail(user, callback) {
  console.log(`email to ${user.email}`);
  return callback(user);
}

function getResult(user) {
  return `success register ${user.name}`;
}

const result = register({
  email: "abc@test.com",
  password: "1234",
  name: "elly",
});
console.log(result);
