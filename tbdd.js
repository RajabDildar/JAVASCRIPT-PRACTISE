/* let n = 25;
n *= 3;
console.log(n); */
/* if (n === 75) {
  alert("you're right");
} else {
  alert("you're wrong");
} */
/* const obj = {
  itemName: "ball pen",
  Rate: 4,
  idDeal: true,
  price: 270,
};
console.log(obj);
obj.Rate = 3;
console.log(obj.Rate);
obj["price"] = 300;
console.log(obj["price"]); */
/* let num = prompt("enter a number");
num % 5 == 0
  ? console.log(`${num} is multiple of 5`)
  : console.log(`${num} is NOT a multiple of 5`); */

/* let marks = prompt("enter your marks out of hundred");
if (marks >= 90 && marks <= 100) {
  alert("you have got grade A");
} else if (marks >= 70 && marks <= 89) {
  alert("you have got grade B");
} else if (marks >= 60 && marks <= 69) {
  alert("you have got grade C");
} else if (marks >= 50 && marks <= 59) {
  alert("you have got grade D");
} else if (marks >= 0 && marks <= 49) {
  alert("you have got grade F");
} else {
  alert("please reload the site and enter a valid number between 0-100");
}
if (marks >= 0 && marks <= 100) {
  console.log(`your marks are ${marks} `);
} else {
  console.log(`please enter valid marks  `);
} */
/* let userNum = prompt("enter a number");
userNum % 5 == 0
  ? console.log(`${userNum} is multiple of 5`)
  : console.log(`${userNum} is NOT a multiple of 5`); */
/* let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(`sum = ${sum}`);
 */
/* let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(`sum = ${sum}`); */
/* let i = 1;
do {
  console.log("apna college");
  i++;
} while (i <= 5); */
/* for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`even = ${i}`);
  }
}
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`odd = ${i}`);
  }
} */
/* let gameNum = 25;
let userNum = prompt("Guess the number \n try 1-100");
while (userNum != gameNum) {
  userNum = prompt("You're wrong.Please Guess the correct number.");
}
if (userNum == gameNum) {
  alert("you've got it");
} */
/* const obj = {
  itemName: "ball pen",
  Rate: 4,
  isDeal: true,
  price: 270,
};
console.log(obj);

for (let key in obj) {
  console.log(`key = ${key} & value = ${obj[key]}`);
} */
/* let str = "APNA college";
let newStr = " javascript";
let res = str.concat(newStr);
console.log(res); */
/* let fullName = prompt("Enter your Name\nPlease don't use spaces");
let userName = `@` + fullName + fullName.length;
alert(`Remember! your username is ${userName}`);
console.log(userName); */
/* for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
} */
/* let count = 0;
let str = "hello world!";
for (let val of str) {
  if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
    console.log(val);
    count++;
  }
}
console.log(`count of vowels = ${count}`); */

/* let marks = [85, 97, 44, 37, 76, 60];
console.log(marks);
let sum = 0;
for (let val of marks) {
  console.log(val);
  sum += val;
}
console.log(`sum = ${sum}`);
let avg = sum / marks.length;
console.log(`avg = ${avg}`); */

/* let heroes = [`ironman`, `thor`, `antman`, `spiderman`, `hulk`];
console.log(heroes); */

/* for (let val in marks) {
  console.log(`val = ${val} & marks[val] = ${marks[val]}`);
  // console.log(marks[val]);
} */

/* for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
} */
/* for (let key in heroes) {
  console.log(heroes[key]);
} */

/* let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
  console.log(val);
  items[i] = val * 0.9;
  i++;
}
console.log(items); */
/* let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
comp.splice(0, 1, "uber", "ola");
comp.push("amazon");
console.log(comp); */

/* let count = 0;
function myFunc(str) {
  for (let val of str) {
    if (val == "a" || val == "e" || val == "i" || val == "o" || val == "u") {
      count++;
    }
  }
}
myFunc(prompt());
console.log(`count = ${count}`); */

/* let count = 0;
const myFunc = (str) => {
  for (let val of str) {
    if (val == "a" || val == "e" || val == "i" || val == "o" || val == "u") {
      count++;
    }
  }
};
myFunc(prompt("write your name to know vowels count in it"));
alert(`vowelsCount = ${count}`);
console.log(`vowelsCount = ${count}`); */

/* function myFunc(str, num) {
  console.log(str);
  console.log(num);
}
myFunc(prompt("enter str"), prompt("enter num")); */

/* function myFunc(a, b) {
  console.log(`a + b = ${Number(a) + Number(b)}`);
}
myFunc(prompt("enter a"), prompt("enter b")); */

/* function sum(a, b) {
  let ans = a + b;
  return ans;
}
let val = sum(2, 2);
console.log(val); */

/* let count = 0;
const vowelsFunc = (str) => {
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      count++;
    }
  }
};
vowelsFunc(prompt("enter your name to know vowels count in it"));
console.log(`count = ${count}`); */
/* let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val) => {
  return val ** 2;
});
console.log(newArr); */
/* let price = [250, 645, 300, 900, 50];
let newPrice = price.filter((val) => {
  return val % 2 !== 0;
});
console.log(`newPrice = ${newPrice}`); */

let arr = [18, 23, 3, 22, 2, 2, 3];
let newArr = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(newArr);
/* let n = prompt("enter a number");
let arr = [];
let val = 1;
for (let i = 0; i < n; i++) {
  arr[i] = val;
  val++;
}
document.write(`array = [${arr}]`);
console.log(arr); */

// let maxNum = Math.max(...arr);
/* let newArr = arr.reduce((prev, val) => {
  return prev > val ? prev : val;
});
console.log(newArr); */
/* let newArr = arr.filter((val) => {
  return val === maxNum;
});
console.log(newArr); */
/* let newArr = Math.max(...arr);
console.log(newArr); */
/* newArr.forEach((val, i, arr) => {
  for (let i = 0; i <= 5; i++) {
    newArr[i] = val;
  }
}); */
