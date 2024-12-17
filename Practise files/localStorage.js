let key = prompt("Enter key. Don't use clear");
let value = prompt("Enter value. Don't use clear");

localStorage.setItem(key, value);
console.log(`the value at ${key} = ${localStorage.getItem(key)}`); // localStorage.getItem(key) -->gives value
console.log(`localStorage.length = ${localStorage.length}`);
console.log(`localStorage.key(0) = ${localStorage.key(0)}`);
console.log(`localStorage.key(1) = ${localStorage.key(1)}`);

if (key == "color" && value == "red") {
  localStorage.removeItem("color");
}

if (key == "clear" && value == "clear") {
  localStorage.clear();
}

// for local storage, key and value must be string
