// asynchronous programing

console.log("one");
console.log("two");

function hello() {
  console.log("hello! after timeout...");
}

setTimeout(hello, 4000); //time is written in milliseconds 2s --> 2000ms  (hello function will be executed after 2s)
setTimeout(() => {
  console.log("hello after timeout... in other way");
}, 4000);

console.log("three");
console.log("four");

// callback functions

function goodMorning(callBack) {
  setTimeout(() => {
    console.log("goodMorning!");
    callBack();
  }, 2000);
}

function goodbye() {
  console.log("goodbye!");
}
goodMorning(goodbye);
goodMorning(() => {
  console.log("callback function is here...");
});

//calculator callback function

const calculator = (a, b, operation) => {
  operation(a, b);
};

const addition = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};

calculator(9, 4, addition);

const subtraction = (a, b) => {
  console.log(`${a} - ${b} = ${a - b}`);
};

calculator(5, 2, subtraction);

const multiply = (a, b) => console.log(`${a} * ${b} = ${a * b}`);
calculator(3, 3, multiply);

calculator(22, 2, (a, b) => {
  console.log(`${a} / ${b} = ${a / b}`);
});

calculator(22, 2, (a, b) => {
  console.log(`${a} % ${b} = ${a % b}`);
});

// callback hell

function getData(getId, getNextData) {
  setTimeout(() => {
    console.log("data for", getId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// promises (Promise is also an object)

let promise = new Promise((resolve, reject) => {
  console.log("hey! I am a promise.");
  // reject("promise is rejected due to some error.");
  resolve("promise is resolved successfully");
});
console.log(promise);

function getData2(data2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise for data2 resolved", console.log("data2 for", data2));
      // reject("promise rejected");
    }, 5000);
  });
}
let res = getData2(22);

//if promise is fulfilled promise.then() is used

res.then((res) => {
  console.log("promise for getdata2 is fulfilled", res); //here res is message that is given during resolve
});

//if promise is rejected promise.catch() is used

res.catch((err) => {
  console.log("promise for getdata2 is fulfilled", err); //here err is message that is given during reject
});

//promise chaining

function pr1() {
  return new Promise((resolve, reject) => {
    console.log("fetching data 1...");
    setTimeout(() => {
      console.log("here is data1");
      resolve("success");
    }, 4000);
  });
}

function pr2() {
  return new Promise((resolve, reject) => {
    console.log("fetching data 2...");
    setTimeout(() => {
      console.log("here is data2");
      resolve("success");
    }, 4000);
  });
}

function pr3() {
  return new Promise((resolve, reject) => {
    console.log("fetching data 3...");
    setTimeout(() => {
      console.log("here is data3");
      resolve("success");
    }, 4000);
  });
}

//via promise chaining

pr1()
  .then((res) => {
    return pr2();
  })
  .then((res) => {
    return pr3();
  })
  .then(() => {
    console.log("you've got data for p1,p2,p3");
  });

function getData3(data3) {
  return new Promise((resolve, reject) => {
    console.log("getting data...");
    setTimeout(() => {
      console.log("data3 for", data3);
      resolve("promise for data3 resolved");
    }, 2000);
  });
}

getData3(11)
  .then((res) => {
    return getData3(22);
  })
  .then(() => {
    return getData3(33);
  })
  .then(() => {
    return getData3(44);
  })
  .then(() => {
    console.log("you've got data for all ids");
  });

// async await

function api() {
  return new Promise((resolve, reject) => {
    console.log("getting weather data...");
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWaetherData() {
  await api();
  await api();
  await api();
}

getWaetherData();

// calling pr1,pr2,pr3 via async await

async function prPractise() {
  await pr1();
  await pr2();
  await pr3();
}

prPractise();

//getting data via async await

const getData4 = (data) => {
  return new Promise((resolve, reject) => {
    console.log("getting data....");
    setTimeout(() => {
      console.log("data for ", data);
      resolve(200);
    }, 2000);
  });
};

async function getAllData() {
  await getData4(11);
  await getData4(22);
  await getData4(33);
  await getData4(44);
  await getData4(55);
  await getData4(66);
}

getAllData();
