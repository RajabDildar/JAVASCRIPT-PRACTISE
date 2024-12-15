function myfunction() {
  console.log("apna college");
  console.log("codehelp");
  console.log("codewithharry");
  console.log("kevin powell");
}
myfunction();
myfunction();
myfunction();

function sum(a, b) {
  console.log(a + b);
}

sum(1, 2); //this will do 1+2=3
sum(999, 678);

function diff(x, y) {
  d = x - y;
  return d;
  console.log("the code after return is not exeuted.");
}

let ans = diff(10, 3);
console.log(ans); //this is how to get returned value

function divide(a, b) {
  return a / b;
}

let division = divide(50, 5);
console.log("division is", division);

// arrow functions

/* const myfunc = (msg) => {
  console.log(msg);
};
myfunc("apna college");  */

const arrowSum = (a, b) => {
  return a + b;
};

console.log(arrowSum(5, 15)); //20

const arrowmul = (a, b) => {
  return a * b;
};

const printHello = () => {
  console.log("hello world!");
};

printHello();

// pq1

function pq1(str1) {
  for (let val of str1) {
    if (val === "a") {
      console.log(val);
    } else if (val === "e") {
      console.log(val);
    } else if (val === "i") {
      console.log(val);
    } else if (val === "o") {
      console.log(val);
    } else if (val === "u") {
      console.log(val);
    }
  }
}

pq1("hello"); //write a word in this string to know vowels

// another way to solve pq1

function pq(str) {
  let counting = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      counting++;
    }
  }
  console.log(`counting is ${counting}`);
}
pq("aeiou"); //write a word in this string to know vowels

// pq2

let vowelsCount = 0;
const pq2 = (str2) => {
  for (let val of str2) {
    if (val === "a") {
      vowelsCount++;
    } else if (val === "e") {
      vowelsCount++;
    } else if (val === "i") {
      vowelsCount++;
    } else if (val === "o") {
      vowelsCount++;
    } else if (val === "u") {
      vowelsCount++;
    }
  }
};

pq2("ellite"); //write a word in this string to count vowels
console.log(`vowelsCount in pq2 = ${vowelsCount}`);

// another better way to solve pq2

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// another better way to solve pq2

const vc = (str) => {
  let counting = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      counting++;
    }
  }
  console.log(`counting is ${counting}`);
};
vc("aeiou");

// callback function (for each loop) (for each loop performs an operation but do not change original array)

let cities = [
  "mumbai",
  "lahore",
  "toba",
  "karachi",
  "gojra",
  "rawalpindi",
  "faisalabad",
];

// with function

cities.forEach(function cityFunc(val) {
  console.log(val);
});

// with arrow function

cities.forEach((val) => {
  console.log(val);
});

cities.forEach((val) => {
  console.log(val.toUpperCase());
});

// three parameters

cities.forEach((val, idx, cities) => {
  console.log(val.toUpperCase(), idx, cities);
});

let numArray = [1, 2, 3, 4, 5, 6, 7];

numArray.forEach((val) => {
  val *= val;
  console.log(`val is ${val}`);
});

/* let calcSquare = (val) => {
  val = val ** 2;
  console.log(`val is ${val}`);
};

numArray.forEach(calcSquare); */

// map method (map method performs an operation and targets original array and make a copy of it accordingly)

let nums = [20, 30, 40, 50, 60];

let newNums = nums.map((val) => {
  return val * 2;
});
console.log(`nums = ${nums}`);
console.log(`newNums = ${newNums}`); //map method has changed array

// filter method

let nums2 = [2, 3, 4, 5, 6, 7, 8, 9];
let evenNums2 = nums2.filter((val) => {
  return val % 2 === 0;
});

console.log(`nums2 = ${nums2}`);
console.log(`evenNums2 = ${evenNums2}`); //here we have filtered all even numbers and created a new array

let oddNums2 = nums2.filter((val) => {
  return val % 2 !== 0;
});

console.log(`oddNums2 = ${oddNums2}`);

// reduce method

//to find the sum of numbers

let sumNums2 = nums2.reduce((prev, val) => {
  return prev + val;
});

console.log(`sumNums2 = ${sumNums2}`);

//to find the largest numbers

let nums3 = [5, 4, 2, 7, 8, 101];
let newNums3 = nums3.reduce((prev, val) => {
  return prev > val ? prev : val;
});

console.log(`newNums3 = ${newNums3}`);

// converting string to number in prompt because prompt collect data in the form of string (just use + operator before string or Number(str))

/* function myFunc(a, b) {
  console.log(+a + +b);
//  console.log(Number(a) + Number(b));
}
myFunc(prompt("enter a"), prompt("enter b")); */

// practise questions

let marks = [33, 55, 47, 87, 78, 92, 96, 95];
let highestMarks = marks.filter((val) => {
  return val > 90;
});
console.log(`highest marks are ${highestMarks}`);

// 2nd question

let arr = [];
let n = prompt(`enter a number`);
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log("arr is", arr);

let arrSum = arr.reduce((prev, val) => {
  return prev + val;
});
console.log(`sum of arr = ${arrSum}`);

let arrMul = arr.reduce((prev, val) => {
  return prev * val;
});
console.log(`product of arr = ${arrMul}`);

// palindrome checking (string ko argument mei le kr palindrome check krne ka tariqa)

/* let palinCheck = (str) => {
  if (str === str.split("").reverse().join("")) {
    console.log("it is palindrome");
  } else {
    console.log("it is Not a palindrome");
  }
};
palinCheck(prompt("Enter your name to check palindrome")); */
