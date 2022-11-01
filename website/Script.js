const body = document.querySelector("body");

// function getColor() {
//   body.style.backgroundColor = document.cookie || "rgb(200, 100, 100)";
// }

const redBtn = document.getElementById("red_btn");
const yelBtn = document.getElementById("yellow_btn");
const greBtn = document.getElementById("green_btn");
const orgBtn = document.getElementById("original_btn");

handleClickRed = () => {
  // document.cookie = "rgb(2000, 80, 80)";
  body.style.backgroundColor = "rgb(2000, 80, 80)";
};

handleClickYel = () => {
  console.log("yellow click");
  body.style.backgroundColor = "rgb(200, 150, 50)";
};

handleClickGre = () => {
  body.style.backgroundColor = "rgb(150, 150, 100)";
};

handleClickOrg = () => {
  console.log("org click");
  body.style.backgroundColor = "rgb(200, 100, 100)";
};

redBtn.addEventListener("click", handleClickRed);
yelBtn.addEventListener("click", handleClickYel);
greBtn.addEventListener("click", handleClickGre);
orgBtn.addEventListener("click", handleClickOrg);
