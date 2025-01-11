const url = "https://catfact.ninja/fact";
const url2 = "https://icanhazdadjoke.com";

//in axios,data comes in JSON form
async function getData() {
  try {
    let res = await axios.get(url);
    console.log(res);
    console.log(res.data.fact);
  } catch (error) {
    console.log("error");
  }
}
getData();

//sending headers with request
async function getData2() {
  try {
    let config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url2, config);
    console.log(res);
    console.log(res.data.joke);
  } catch (error) {
    console.log("error");
  }
}
getData2();
