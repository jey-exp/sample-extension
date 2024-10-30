const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

const outer = document.querySelector(".outer");
const button = document.querySelector(".click_button");

let colorToChange = "";

red.addEventListener("click", () => {
  let color = getComputedStyle(outer).backgroundColor;
  console.log(color);
  if (color != "rgb(120, 0, 0)") {
    colorToChange = "rgb(120, 0, 0)";
  }
  if (color === "rgb(120, 0, 0)") {
    outer.style.backgroundColor = "rgb(0,0,0)";
    colorToChange = "";
  }
});

yellow.addEventListener("click", () => {
  let color = getComputedStyle(outer).backgroundColor;
  console.log(color);
  if (color != "rgb(220, 220, 0)") {
    colorToChange = "rgb(220, 220, 0)";
  }
  if (color === "rgb(220, 220, 0)") {
    outer.style.backgroundColor = "rgb(0,0,0)";
    colorToChange = "";
  }
});

green.addEventListener("click", () => {
  let color = getComputedStyle(outer).backgroundColor;
  console.log(color);
  if (color != "rgb(0, 120, 0)") {
    colorToChange = "rgb(0, 120, 0)";
  }
  if (color === "rgb(0, 120, 0)") {
    outer.style.backgroundColor = "rgb(0,0,0)";
    colorToChange = "";
  }
});

blue.addEventListener("click", () => {
  let color = getComputedStyle(outer).backgroundColor;
  console.log(color);
  if (color != "rgb(0, 0, 120)") {
    colorToChange = "rgb(0, 0, 120)";
  }
  if (color === "rgb(0, 0, 120)") {
    outer.style.backgroundColor = "rgb(0,0,0)";
    colorToChange = "";
  }
});

button.addEventListener("click", () => {
  console.log("On button click: ", colorToChange);
  outer.style.backgroundColor = colorToChange;
  if (colorToChange === "") {
    console.log(button.innerHTML);
    button.innerHTML = "<h3>Chose a color</h3>";
    setTimeout(() => {
        button.innerHTML="<h3>Apply</h3>";
    }, 1000);
  }
});
