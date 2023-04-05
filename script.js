// screen
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// number
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }

  calculationOperator = operator;
  currentNumber = "0";
};

// equal sign
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// calculate
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

// clear
const clearBtn = document.querySelector(".all-clear"); 

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
