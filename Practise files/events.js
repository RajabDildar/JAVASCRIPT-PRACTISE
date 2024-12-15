document.querySelector("#btn1").onclick = () => {
  console.log("you've clicked the button");
};
// btn1.onclick();//we can also call the function
document.querySelector("#btn2").ondblclick = () => {
  console.log("you've clicked the button 2x");
};
//JS has an event obj which stores information about event.we can access it by passing it as an argument in function (as below)
document.querySelector("#btn3").onclick = (evt) => {
  console.log(evt);
  console.log(`evt.type = ${evt.type}`);
  console.log("evt.target = ", evt.target);
  console.log(`evt.clientX = ${evt.clientX}`); //clientX is position along x-axis
  console.log(`evt.clientY = ${evt.clientY}`); //clientY is position along y-axis
  console.log("you've clicked the button 3");
};

document.querySelector("#box1").onmouseover = () => {
  console.log("you're hovering over box1");
};

// event listeners

document.querySelector("#btn4").addEventListener("click", () => {
  console.log("event listener --handler 1");
});

document.querySelector("#btn4").addEventListener("click", () => {
  console.log("event listener --handler 2");
});

let handler3 = () => {
  console.log("event listener --handler 3");
};

document.querySelector("#btn4").addEventListener("click", handler3);

document.querySelector("#btn4").addEventListener("click", () => {
  console.log("event listener --handler 4");
});

// removing handler3 eventlistener

document.querySelector("#btn4").removeEventListener("click", handler3);

// pq1 (creating toggle button for light and dark theme)

let body = document.querySelector("body");
let modebtn = document.querySelector("#mode");
modebtn.addEventListener("click", () => {
  if (body.getAttribute("class") === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    modebtn.style.background =
      "linear-gradient(to right, rgb(231, 226, 226) 50%, black 50%)";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    modebtn.style.background =
      "linear-gradient(to right, black 50%, rgb(231, 226, 226) 50%)";
  }
});
