const DB = [];

function register(user) {
  return saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log("완료"));
}

function saveDB(user) {
  const oldDBSize = DB.length + 1;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("save db error"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => resolve(user));
}

function getResult(user) {
  return new Promise((resolve) => resolve(`success register ${user.name}`));
}

const result = register({
  email: "abc@test.com",
  password: "1234",
  name: "elly",
});
result.then(console.log);

// const user = {
//   email: "abc@test.com",
//   password: "1234",
//   name: "elly",
// };
// const allResult = Promise.all([saveDB(user), sendEmail(user), getResult(user)]);
// allResult.then(console.log);
