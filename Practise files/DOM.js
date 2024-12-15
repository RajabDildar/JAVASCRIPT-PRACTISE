console.log(window);
console.dir(window);
console.log(document);
console.dir(document);
console.log(document.body);
console.dir(document.body);
console.log(document.body.childNodes[1]);
document.body.style.background = "green"; //changing color of body
document.body.childNodes[3].innerText = "rajab"; //changing text
let button = document.getElementById("btn1"); //if id element does not exist,it will give null value
console.log(button);
let headings = document.getElementsByClassName("headings"); //if class elements does not exist,it will give empty html collection
console.log(headings);
let parahs = document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);

//query selectors

let firstEl = document.querySelector("p"); //returns first element
console.log(firstEl);
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); //returns all elements (nodelist)
console.log(allEl);
console.dir(allEl);

let headingClass = document.querySelectorAll(".headings");
console.log(headingClass);
console.dir(headingClass);

let btnId = document.querySelector("#btn1");
console.log(btnId);
console.dir(btnId);

// properties

console.log(document.querySelector("div").innerText);
console.log(document.querySelector("div").innerHTML);
console.log(document.querySelector("div").tagName);
console.log(document.querySelector("h6").textContent); //although visibility of h6 is hidden,textcontent gives value even for hidden elements

// practise questions
// pq1
document.querySelector("h2").innerText += " from apna college students";
// pq2
let boxes = document.querySelectorAll(".boxes");
console.log(boxes);
/* boxes[0].innerText = "unique text 1";
boxes[1].innerText = "unique text 2";
boxes[2].innerText = "unique text 3"; */
let i = 1;
for (let val of boxes) {
  console.log(val.innerText);
  val.innerText = `unique value ${+i}`;
  i++;
  console.log(val.innerText);
}
