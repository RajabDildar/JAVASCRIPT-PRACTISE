//factory functions (should not be used. because of memory inefficiency i.e, each object that is formed acquire space in memory)
const personMaker = (name, age) => {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi! I am ${name} and I can talk.`);
    },
  };

  return person;
};

let p1 = personMaker("rajab", 17);
console.log(p1);
p1.talk();

let p2 = personMaker("ali", 12);
console.log(p1);
p2.talk();

let p3 = personMaker("eve", 33);
console.log(p1);
p3.talk();
