const student = {
  fullName: "Rajab Ali",
  class: 13,
  marks: 4.0,
  age: 17,
  printMarks: function () {
    console.log("marks =", this.marks); //object k ander ke kisi variable(key) ko use krne k liye this keyword use krte hain.(e.g, here this.marks means student.marks)
  },
  /* printMarks() {
    console.log("marks =", this.marks);
  }, //simpler way of writing functions inside an object */
};

console.log(student);

let fruitsArr = ["apple", "mango", "banana"];
console.log(fruitsArr);
console.log(`typeof fruitsArr = ${typeof fruitsArr}`); //since typeOf array is object,it will also have a prototype
fruitsArr.push("litchi"); //array methods and functions are created by-default by prototype object inside array
console.log(fruitsArr);

// prototype

const employees = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

const employee1 = {
  salary: 50000,
};

const employee2 = {
  salary: 50000,
};

const employee3 = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 20%");
  },
};

employee1.__proto__ = employees; //we are setting functions of employees object into employee1 object as prototype
employee2.__proto__ = employees;
employee3.__proto__ = employees;
employee1.calcTax();
employee3.calcTax(); //employee3 k liye calcTax wala function overwrite kr diya hai. is liye tax rate is 20% print hoga (object vs prototype --> object)

// (object vs prototype --> object (because object is more specific))

// classes (when we need to create similar type of objects in bulk,we use classes)

class toyotaCar {
  // constructor (constructor is the method in class which automatically invoked whenever a new object is created)
  constructor(color) {
    console.log("creating new object...");
    this.color = color;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brandName = brand;
  }

  setNum(carNum) {
    this.carNum = carNum;
  }
}
// we don't need to use commas to seperate functions in classes (as we need in objects)
let fortuner = new toyotaCar("white"); //by using new keyword,we can create a new object based on our template class
fortuner.start();
let lexus = new toyotaCar("black"); //here "black" is the argument for color parameter in constructor.  so lexus.color = "black"
lexus.stop();
lexus.setBrand("lexus");
console.log("lexus brandName =", lexus.brandName);
fortuner.setNum(1234);
console.log("fortuner carNum =", fortuner.carNum);
lexus.setNum(4567);
console.log("lexus carNum =", lexus.carNum);

// inheritance (child class vs parent class --> child class wins)

class parent {
  hello() {
    console.log("hello");
  }
}

class child extends parent {} //we have extended all properties and methods of parent class in child class
let child1 = new child();
child1.hello();

class person {
  constructor() {
    this.species = "homo sapiens";
    console.log("entering parent constructor");
  }
  eat() {
    console.log("I can eat");
  }
  sleep() {
    console.log("I can sleep");
  }
  work() {
    console.log("I do nothing");
  }
}
let p1 = new person();
p1.eat();
p1.work();

class engineer extends person {
  work() {
    console.log("I'm an engineer.I can solve problems");
  }
}

let engObj = new engineer();
engObj.eat();
engObj.sleep();
engObj.work();

class doctor extends person {
  work() {
    console.log("I'm a doctor.I can treat patients");
  }
}

let docObj = new doctor();
docObj.work();

class salesMan extends person {
  constructor() {
    console.log("creating sales man object");
    console.log("entering child constructor");
    super(); //super keyword is used to invoke the constructor of parent
    console.log("exiting child constructor");
  }
  work() {
    console.log("I'm a sales man.I can sale things.");
    super.eat();
  }
}
let s1 = new salesMan();
s1.eat();
s1.work();

// pq1

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("you are a user.You can view website data");
  }
}
let user1 = new user("user1", "user1@gmail.com");

class admin extends user {
  constructor(name, email) {
    super(name, email);
    console.log("you are admin.you can edit website data");
  }
}

let admin1 = new admin("admin1", "admin1@gmail.com");

//error handling

let a = 5;
let b = 7;
console.log("a + b =", a + b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);

try {
  console.log("a + b =", a + c); //error
} catch (err) {
  console.log(err);
}

console.log("a + b =", a + b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);
