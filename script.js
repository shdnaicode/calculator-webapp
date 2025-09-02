const numberButton = document.querySelectorAll(".number-btn");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const buttonAudio = document.querySelector("#mouseClick");
const outputWindow = document.querySelector(".output-window");

let firstNum = "";
let operator = "";
let secondNum = "";

const buttonSound = () => {
  buttonAudio.play();
};

const buttonClear = () => {
    firstNum = "";
    operator = "";
    secondNum = "";
};

const buttonNumber = (event) => {
  const keyNum = event.target.value;
  outputWindow.innerHTML = firstNum + operator + secondNum;

  if (!isNaN(keyNum)) {
    outputWindow.innerHTML += keyNum;

    if (!operator) {
      firstNum += keyNum;
    } else {
      secondNum += keyNum;
    }
  } else if (keyNum === "-") {
    operator = keyNum;
    outputWindow.innerHTML += keyNum;
  } else if (keyNum === "+") {
    operator = keyNum;
    outputWindow.innerHTML += keyNum;
  } else if (keyNum === "÷") {
    operator = keyNum;
    outputWindow.innerHTML += keyNum;
  } else if (keyNum === "×") {
    operator = keyNum;
    outputWindow.innerHTML += keyNum;
  } else if (keyNum === "=") {
    const num1 = Number(firstNum);
    const num2 = Number(secondNum);

    if (operator === "+") firstNum = num1 + num2;
    else if (operator === "-") firstNum = num1 - num2;
    else if (operator === "÷") firstNum = num1 / num2;
    else if (operator === "×") firstNum = num1 * num2;

    operator = "";
    secondNum = "";
  }

  outputWindow.innerHTML = firstNum + operator + secondNum;
};

numberButton.forEach((button) => {
  button.addEventListener("click", buttonSound);
});

clearButton.addEventListener("click", buttonClear);

numberButton.forEach((buttonNum) => {
  buttonNum.addEventListener("click", buttonNumber);
});
