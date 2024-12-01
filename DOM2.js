let div = document.querySelector(".box");
console.log(div);
console.log(div.innerText);
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
// div.style.fontSize = "2rem";
div.style.border = "4px solid yellow";

console.log(div.getAttribute("class"));

let para = document.querySelector("#para1");
console.log(`id of p =  ${para.getAttribute("id")}`);
para.setAttribute("id", "paragraph1");
console.log(`updated id of p =  ${para.getAttribute("id")}`);
div.style.height = "250px";
div.style.width = "250px";

//creating and inserting new elements

// appending (adding at end of) node
let newBtn1 = document.createElement("button");
newBtn1.innerText = "appended button!";
newBtn1.style.backgroundColor = "blue";
console.log(newBtn1);
div.append(newBtn1);

// prepending (adding at start of) node
let newBtn2 = document.createElement("button");
newBtn2.innerText = "prepended button!";
div.prepend(newBtn2);
newBtn2.style.backgroundColor = "blue";

//adding element before node
let newBtn3 = document.createElement("button");
newBtn3.innerText = "before node!";
div.before(newBtn3);
newBtn3.style.backgroundColor = "blue";

//adding element after node
let newBtn4 = document.createElement("button");
newBtn4.innerText = "after node!";
div.after(newBtn4);
newBtn4.style.backgroundColor = "blue";

//prepending a heading in body

let newHeading = document.createElement("h2");
newHeading.innerHTML = "<i>I'm a new prepended heading</i>";
document.querySelector("body").prepend(newHeading);

//removing para2
let para2 = document.querySelector("#para2");
para2.remove();

//text node
let text = document.createTextNode(" :appending text node... hello world!");
console.log(text);
para.append(text);

//comment node (to insert comments in HTML)

/* let comment = document.createComment("this is a comment created in JS code");
document.querySelector("body").prepend(comment); */
document
  .querySelector("body")
  .prepend(document.createComment("this is a comment created in JS code"));

//   pq2  (adding newClass in myClass paragraph)

let classPara = document.querySelector(".myClass");
console.log(classPara);
// myClass.setAttribute("class", "myClass newClass"); // Not a good approach to add classes.setAttribute overwrite class.so use class list
classPara.classList.add("newClass"); //newClass gives background-color and myClass gives color to paragraph in CSS
// classPara.classList.remove("newClass") //to remove a class
