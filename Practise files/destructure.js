//array destructuring
let names = ["rajab", "ali", "dildar", "abc", "xyz", "one", "two"];
/* //traditional approach
let winner = names[0];
let runnerUp = names[1];
let secRunnerUp = names[2]; */
let [winner, runnerUp, secRunnerUp, ...others] = names;
console.log(winner);
console.log(runnerUp);
console.log(secRunnerUp);
console.log(others);

//object destructuring

let student = {
  fullName: "ali",
  class: 13,
  cgpa: 4,
  subject: "CS",
};

let { fullName: myName, subject, hello = "hello world!" } = student;
console.log(myName);
console.log(subject);
console.log(hello);
