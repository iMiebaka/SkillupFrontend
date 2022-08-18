//  Getting the html via document 
const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const selector = document.querySelector("#selector");

// add up function
function add(a, b) {
  return a + b;
}

// subtraction function
function subtract(a, b) {
  return a - b;
}

// multipy function
function multiply(a, b) {
  return a * b;
}

// division function
function divide(a, b) {
  return a / b;
}


// function call when button clicked
function buttonClick() {

  try {
    // Parse both html input to integer
    const valueOne = parseInt(firstInput.value);
    const valueTwo = parseInt(secondInput.value);
    // Comment this to ☝️ 
    //////// and //////
    // Uncomment this to 👇 to parse to float
    /*
    const valueOne = parseInt(firstInput.value);
    const valueTwo = parseInt(secondInput.value);
    */

    // Check if first value is valid
    if (isNaN(valueOne)) {
      document.querySelector(".error").innerHTML =
        "First value is not a string";
      return;
    }
    // Check if second value is valid
    if (isNaN(valueTwo)) {
      document.querySelector(".error").innerHTML =
        "Second value is not a string";
      return;
    }
    // Perform arthmetic for addition
    if (selector.value == "+") {
      // This will flag an error because of the syntax error
      document.querySelector(".ans").innerHTML = add(alueOne, valueTwo);
    }
    // Perform arthmetic for subtraction
    if (selector.value == "-") {
      document.querySelector(".ans").innerHTML = subtract(valueOne, valueTwo);
    }
    // Perform arthmetic for multiplication
    if (selector.value == "*") {
      document.querySelector(".ans").innerHTML = multiply(valueOne, valueTwo);
    }
    // Perform arthmetic for division
    if (selector.value == "/") {
      document.querySelector(".ans").innerHTML = divide(valueOne, valueTwo);
    }

    // Clear both input boxes
    firstInput.value = "";
    secondInput.value = "";

    // Clear error p tags just in case
    document.querySelector(".error").innerHTML = "";
  } catch (error) {
    
    // Display error in error p tag
    document.querySelector(".error").innerHTML = error;
    // Clear the answer innerHTML
    document.querySelector(".ans").innerHTML = "";
  }
}

// Query selector for button with callback
document.querySelector(".sum-btn").addEventListener("click", buttonClick);
