// for loop

// printing "Apna College" 5 times

for (let count = 1; count <= 5; count++) {
  console.log("Apna College");
}

for (let k = 20; k > 10; k--) {
  console.log("practise");
}

//rough syntax       for (variable;condition;updation){task}

//Calculate sum of 1 to 5

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

//  console.log("sum is", sum); //this will do 1+2+3+4+5=15

/*let b = 0;
let n = prompt("write any no. here to turn loop on!");

for (let a = 1; a <= n; a++) {
  b = b + a;
}

console.log(b); */

// while loop

let c = 1; //initialization
while (c <= 5) {
  console.log("checking while loop");
  c++; //updation condition
}

/*Rough Syntax

 variable
while (condition){
  task;
  updation;
} */

// do-while loop

let j = 1;
do {
  console.log("checking do-while loop");
  j++;
} while (j <= 5);

/*Rough Syntax

variable
do {
task;
updation;
} while(condition);
*/

// for-of loop        (it is used for Strings and Arrays.It is Not used for Objects)  (str is short form of string. and val is short form of value. however both are variables and you can use any name for these Variables.)

let str = "JavaScript";
for (let val of str) {
  //here val is known as iterator and it targets on individual characters
  console.log(val);
}

let size = 0;
let str2 = "JavaScript";
for (let val of str2) {
  console.log(val); //it is a task
  size++; //it is also a task
}
console.log("str2 size = ", size);

// for-in loops (it is used for objects and Arrays.)

let student = {
  fullName: "Rajab Ali",
  age: 17,
  cgpa: 3.9,
  isPass: true,
};

for (let key in student) {
  console.log("key =", key, "value =", student[key]);
} //this is used for accessing key-value pairs of objects

// practise question 1

//printing even numbers
/* for (let l = 2; l <= 100; l += 2) {
  console.log("l =", l);
} */

/* for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("i =", i);
  }
} */

/* //printing odd numbers
for (let l = 1; l <= 100; l += 2) {
  console.log("l =", l);
} */

/* for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("i =", i);
  }
} */

// practise question 2

/* let gameNum = 25;

let game = prompt("Guess the correct number!");

while (gameNum != game) {
  game = prompt("you're wrong.Guess the correct number again!");
}

alert("congratulations!you've got it"); */

// strings

let str3 = "Apna College";
console.log("str3 =", str3);
console.log("str3.length =", str3.length); //space is included in string length i.e, 12
console.log("str3[0] =", str3[0]); //string position --> string index/indices    (position starts from 0)

// template literals  (method to use strings,expression and variables)(good practise)

let obj = {
  item: "pen",
  price: 10,
};

let str4 = `the price of ${obj.item} is ${obj.price} rupees`;
let str5 = `this is my calculation 1 + 2 + 3 = ${1 + 2 + 3} `;

console.log(str4);
console.log(str5);

// escape characters (\n for next line) and (\t for tab space)

console.log("Apna\nCollege");
console.log("line\nbreak");

// string methods

let string = `a sample string here`;
string = string.toUpperCase();

console.log(string);

let string2 = `a sample string here`;
string2 = string2.toLowerCase();

console.log(string2);

let string3 = `          a sample string here             `;
string3 = string3.trim(); //this remove whitespaces from start and end of string

console.log(string3);

// string slice

let string4 = `abcdefgh`;
string4 = string4.slice(1, 3); //(here 1 is starting index and 3 is is ending index.) since last index is excluded from slice ,so,it will print 1 to 2 index string character i.e, bc

console.log(string4);

// string concatination

let string5 = `apna`;
let string6 = ` college`;

let result = string5.concat(string6);
// let result = string5 + string6; //other method of concatination
// let result = `I am learning JS from ` + string5 + string6; //other method of concatination

console.log(result);

// string replace method

let str77 = `hello`;
console.log(str77.replace(`h`, `y`));
console.log(str77.replace(`lo`, `p`));
console.log(str77.replace(`hello`, `kia hal hai`));

// practise question

let fullName2 = prompt(`enter your full name.\nDon't use spaces`);
let userName = `@` + fullName2 + fullName2.length;

alert(`Remember! your username is ${userName}`);
console.log(`username = ${userName}`);
