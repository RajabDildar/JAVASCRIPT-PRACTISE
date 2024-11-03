console.log("welcome in js series");
console.log("Rajab Ali Dildar");
// alert("This Is Rajab Ali");

// variable start
fullname = "myname";
console.log(fullname); // variable name (i.e, fullname) ko double ya single quotes ' " mei nahi likhen ge. warna vo string ban jae ga
myage = 24;
console.log(myage); // variable name (i.e, myage) ko double ya single quotes ' " mei nahi likhen ge. warna vo string ban jae ga
console.log(myage + 3);
price = 100;
console.log(price); // variable name (i.e, price) ko double ya single quotes ' " mei nahi likhen ge. warna vo string ban jae ga
let x = Symbol("Hello!");
let y = BigInt("123");

// creating objects

const student1 = {
  // key : value
  fullName: "Rajab Ali",
  age: 24,
  marks: 50,
  isPass: true,
};

// methods to acces keys of objects

student1["fullName"] = "Rajab Dildar"; // overwritting fullName key of object student1
student1.age = 26; // overwritting age key of object student1 in other way
student1.marks = student1["marks"] + 10; // overwritting (increasing value of) marks key of object student1

// Arithmetic Operators

let a = 5;
let b = 2;
let c = a * b;

console.log("a =", a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", c);
console.log("a / b =", a / b);
console.log("a % b =", a % b); //modulus operator
console.log("a ** b =", a ** b); //exponential operator 5^2  or 5*5=25

// Arithmetic Operators > unary operators

let d = 5;

//    d--;                  // this will decrease value of d by 1 from next line
//    --d;                  // this will decrease value of d by 1 from same line
//    d++;                  // this will increase value of d by 1 from next line
//    ++d;                  // this will increase value of d by 1 from same line
console.log("d = ", d);

// assignment operators          =    +=       -=      *=        %=         **=

let e = 5;

console.log("e = ", e);

/*    e += 4; // e = e + 4;
console.log("e + 4 = ", e);      */

/*    e -= 4; // e = e - 4;
console.log("e - 4 = ", e);      */

/*    e /= 4; // e = e / 4;
console.log("e / 4 = ", e);      */

/*    e **= 4; // e = e ** 4;
console.log("e ** 4 = ", e);      */

/*    e %= 4; // e = e % 4;
console.log("e % 4 = ", e);      */

// comparison operators

let f = 5;
let g = "5";

console.log("f == g", f == g); // double equal to will check value and will not compare data types(e.g, string and number)
console.log("f != g", f != g); // exclamation and equal to will check value and will not compare data types(e.g, string and number)
console.log("f === g", f === g); // triple equal to will check value and will  compare data types(e.g, string and number)
console.log("f !== g", f !== g); // exclamation and double equal to will check value and will compare data types(e.g, string and number)

console.log("f > g", f > g);
console.log("f < g", f < g);
console.log("f <= g", f <= g);
console.log("f >= g", f >= g);

// logical operators

let h = 6;
let i = 5;

// let cond1 = h > i;
// let cond1 = h >= i;
let cond1 = h !== i;
let cond2 = h === 6;

console.log("cond1 && cond2 =", cond1 && cond2); // if both two conditions are true , then && will give answer true
console.log("cond1 || cond2 =", cond1 || cond2); // if both two conditions or at least one condition is true , then || will give answer true
console.log("!(h < i)", !(h < i)); // if the condition is true , then ! will give answer false and vice versa.

//conditional statements

// if statement

let age = 20;

if (age >= 18) {
  console.log("you can vote");
}

if (age < 18) {
  console.log("you cannot vote");
}

let mode = "dark";
let color;

if (mode === "light") {
  color = "white";
}

if (mode === "dark") {
  color = "black";
}

console.log("mode is", mode);

// if-else statement

let mode2 = "dark";
let color2;

if (mode2 === "light") {
  color2 = "white";
} else {
  color2 = "black";
}

console.log("mode2 is", mode2);

// odd or even checking

let num = 7;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

//Conditional Statements  else-if
let mode3 = "pink";
// let mode3 = "silver";    //here else statement will work and color will be white
let color3;

if (mode3 === "dark") {
  color = "black";
} else if (mode3 === "blue") {
  color3 = "blue";
} else if (mode3 === "pink") {
  color3 = "pink";
} else {
  color3 = "white";
}
console.log(color3);

// ternary operators  a?b:c

let age3 = 16;

age3 >= 18 ? console.log("adult") : console.log("not adult"); //simpler , compact form of if-else

/* let marks2 = prompt("write your marks obtained  1-100");

let result = marks2 >= 33 ? "you are pass" : "you are fail";

console.log(result); */

// practise question 1

let practiseq1 = prompt("Enter some number");
console.log(practiseq1);

if (practiseq1 % 5 === 0) {
  console.log(practiseq1, "is a multiple of 5");
  // document.write(practiseq1, "is a multiple of 5");
} else {
  console.log(practiseq1, "is not a multiple of 5");
  // document.write(practiseq1, "is not a multiple of 5");
}

// practise question 2

let scoreOfStudent = 32;

if (scoreOfStudent <= 100 && scoreOfStudent >= 90) {
  console.log("you have got grade A");
} else if (scoreOfStudent <= 89 && scoreOfStudent >= 70) {
  console.log("you have got grade B");
} else if (scoreOfStudent <= 69 && scoreOfStudent >= 60) {
  console.log("you have got grade C");
} else if (scoreOfStudent <= 59 && scoreOfStudent >= 50) {
  console.log("you have got grade D");
} else {
  console.log("you have got grade F");
}
