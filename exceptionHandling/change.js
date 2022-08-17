const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const selector = document.querySelector("#selector");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function buttonClick() {
  try {
    const valueOne = parseInt(firstInput.value);
    const valueTwo = parseInt(secondInput.value);
    console.log(valueOne == NaN);
    console.log("Passed 1");
    if (isNaN(valueOne)) {
      document.querySelector(".error").innerHTML =
        "First value is not a string";
      return;
    }
    if (isNaN(valueTwo)) {
      document.querySelector(".error").innerHTML =
        "Second value is not a string";
      return;
    }
    if (selector.value == "+") {
      document.querySelector(".ans").innerHTML = add(valueOne, valueTwo);
    }
    if (selector.value == "-") {
      document.querySelector(".ans").innerHTML = subtract(valueOne, valueTwo);
    }
    if (selector.value == "*") {
      document.querySelector(".ans").innerHTML = multiply(valueOne, valueTwo);
    }
    if (selector.value == "/") {
      document.querySelector(".ans").innerHTML = divide(valueOne, valueTwo);
    }

    firstInput.value = "";
    secondInput.value = "";
    console.log("Passed 2");
    document.querySelector(".error").innerHTML = "";
  } catch (error) {
    console.error("Something went wrong", error);
    document.querySelector(".error").innerHTML = "Something went wrong";
  }
}

document.querySelector(".sum-btn").addEventListener("click", buttonClick);
