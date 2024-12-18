// arrays

let marks = [11, 22, 33, 44, 55];
marks[0] = 66; //arrays are mutable. we can change value by accessing index number.this thing does not happen in case of strings.(that's why strings are immutable).
let heroes = [`spiderman`, `hulk`, `thor`, `ironman`, `batsman`, `shaktiman`];

console.log(heroes);
console.log(marks);
console.log(`typeof marks is ${typeof marks}`);

// for loop

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// for of loop

/* for (let val of heroes) {
  console.log(val);
} */

for (let val of heroes) {
  console.log(val.toUpperCase());
}

// for in loop

/* for (let key in heroes) {
  console.log(heroes[key]);
} */

/* for (let key in heroes) {
  console.log(key);
} */

//   pq 1  (average of marks in arrays)

let marksOfStudents = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (val of marksOfStudents) {
  sum += val;
}
let average = sum / marksOfStudents.length;

// pq2

/* let items = [250, 645, 300, 900, 50];
let i = 0;

for (let val of items) {
  console.log(`value at index ${i} = ${val}`);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer is ${items[i]}`);
  i++;
} */

/*   let prices = [250, 645, 300, 900, 50];
  for (let i = 0; i < prices.length; i++) {
    prices[i] *= 0.9;
  }
  console.log(prices); */

let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
  // console.log(`price after offer is ${offer}`);
}
console.log(items);

/* // creating new array with discount applied using map array method 

let price = [250, 645, 300, 900, 50];
let newPrice = price.map((val) => {
  return val * 0.9;
});
console.log(`newPrice after 10% discount is ${newPrice}`); */

// array methods

// push method is used to add something at the end of an array

let foodItems = ["apple", "litchi", "tomato", "potato"];
console.log("foodItems are", foodItems);
foodItems.push("apricot");
console.log("updated foodItems are", foodItems);

// pop method deletes from end and return

let groceryItems = ["rice", "daal", "candies", "meat"];
console.log("groceryItems are", groceryItems);
groceryItems.pop();
console.log("updated groceryItems are", groceryItems);
/* let delitems = groceryItems.pop();
console.log("deleted items are", delitems); */

// toString method

console.log("marks array in string looks like:\n", marks.toString());
console.log(
  "grosseryItems array in string looks like:\n",
  groceryItems.toString()
);

// concatination method

let hero1 = [`ironman`, `batsman`, `shaktiman`];
let hero2 = [`spiderman`, `hulk`, `thor`];
let hero3 = ["abcman", "krish"];
let heroes4 = hero1.concat(hero2, hero3);
console.log("concatination of two arrays \n", heroes4);

// unshift method is used to add something at the start of an array

let ytChannels = ["CodeWithHarry", "codeHelp", "kevin powell"];
console.log("yt channel list is \n", ytChannels);
let channels = ytChannels.unshift("ApnaCollege");
console.log("updated yt channel list is \n", ytChannels);

// shift method deletes from start and return

let laptops = ["hp", "dell", "toshiba", "acer"];
console.log("laptops list is \n", laptops);
let upLaptops = laptops.shift();
console.log("updated laptops list is \n", laptops);
console.log("deleted laptop  is \n", upLaptops);

// sort method (sort array in alphabetical order and overwrites original array)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("sorted array (fruits) =", fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// toreversed method(to reverse an array)
console.log("reversed fruits array = ", fruits.toReversed());

// fill method

let arr6 = [1, 2, 3, 4, 5, 6];
console.log(arr6);
arr6.fill("rajab"); //fill method array k har index pe "rajab" likh de ga
console.log(arr6);

//find method

let arr7 = [3, 2, 1, 0, -1, -2, -3];
let arr7res = arr7.find((num) => {
  return num < 0;
});
console.log(`arr7res = ${arr7res}`);

//findIndex method

let arr7res2 = arr7.findIndex((num) => num < 0);
console.log(`arr7res2 = ${arr7res2}`); //this will give 4 because first value which is lees than 0 is at index 4.

// slice method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.slice(1, 5));

// splice method
// replace
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers2.splice(2, 2, 101, 102);
console.log(numbers2);

// add
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers3.splice(2, 0, 101); //jis index pe value add krni hai , wo start mei likhna hai  i.e, is case mei 2 hai
console.log(numbers3);

// delete
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers4.splice(3, 1);
// numbers4.splice(3);//agar sirf starting index likhen aur delete number koi na likhen,to starting index se agay sare elements delete ho jaen ge
console.log(numbers4);

// pq

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// companies.splice(2, 1, "Ola");
companies.push("Amazon");
console.log(companies);

//AI practise
//finding largest number in array
let arr = [1, 2, 3, 4, 111, 43432, 5];
let newArr = Math.max(...arr);
console.log(newArr);

// joining all elements of array into string
console.log(["rajab", "ali", "dildar"].join(""));

// reversing array

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.reverse());

let [f, g, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(f, g, rest);

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

let { a, b } = obj;
console.log(a, b);

//... is spread operator

let arr8 = [1, 2, 3, 4, 5, 6];
console.log(...arr8);
