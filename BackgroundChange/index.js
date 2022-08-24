const containerMain = document.querySelector(".container");
const subContainer = document.querySelector(".sub-container");
const calculatorBtns = document.querySelectorAll(".value-btn");
const btnSwitch = document.querySelector(".switch");

let themeStateDark = true;

console.log(containerMain.classList.contains("container-light"));

if (containerMain.classList.contains("container-light") == false) {
  containerMain.classList.add("container-light");
}
console.log(containerMain.classList.contains("container-light"));


btnSwitch.addEventListener("click", function () {
  console.log(themeStateDark);
  if (themeStateDark == true) {
    // Set main container to black
    containerMain.style.backgroundColor = "white";
    containerMain.style.color = "black";

    // Set sub container to black
    subContainer.style.backgroundColor = "rgb(231, 231, 231)";
    subContainer.style.color = "black";

    // loop through the button and set it to black
    for (let index = 0; index < calculatorBtns.length; index++) {
      const element = calculatorBtns[index];
      element.style.backgroundColor = "black";
      element.style.color = "white";
    }
    themeStateDark = false;
  } else {
    containerMain.style.backgroundColor = "black";
    containerMain.style.color = "white";

    subContainer.style.backgroundColor = "rgb(61, 61, 61)";
    subContainer.style.color = "white";

    for (let index = 0; index < calculatorBtns.length; index++) {
      const element = calculatorBtns[index];
      element.style.backgroundColor = "white";
      element.style.color = "black";
    }
    themeStateDark = true;
  }
});
