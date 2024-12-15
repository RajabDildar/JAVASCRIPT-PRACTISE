const URL = "https://api.thecatapi.com/v1/images/search";

let promise = fetch(URL);
console.log("promise =", promise);

// fetch("https://api.thecatapi.com/v1/images/search");

// creating a div to set background image
let div1 = document.createElement("div");
document.querySelector("body").append(div1);
div1.style.border = "4px solid red";
div1.style.height = "50vh";
div1.style.backgroundSize = "cover";
div1.style.aspectRatio = "1/1";
div1.innerText = "click me to know a fact about cats!";

// using async-await
const fox = async () => {
  console.log("fetching data for randomfox...");
  let response = await fetch("https://randomfox.ca/floof/");
  console.log("response for fox =", response);
  let data = await response.json();
  console.log("data for fox =", data);
  div1.style.backgroundImage = `url(${data.image})`;
};
fox();

// using promises
/* fetch("https://randomfox.ca/floof/").then((res) => {
  console.log(res);
}); */

// using async-await
const cat = async () => {
  console.log("fetching data for randomcat...");
  let response = await fetch("https://meowfacts.herokuapp.com/?count=3");
  console.log("response for cat =", response);
  let data = await response.json();
  console.log("data for cat =", data);
  console.log("data[0] for cat =", data.data[0]);
  div1.addEventListener("click", () => {
    div1.innerText = `${data.data[0]}`;
  });
};
cat();
