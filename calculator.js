const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const resultEl = document.getElementById("result");

function add(number1, number2) {
  return number1 + number2;
}
addBtn.addEventListener("click", function() 
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  resultEl.textContent = result;
});

function subtract(number1, number2) {
  return number1 - number2;
}

subtractBtn.addEventListener("click", function()  {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(number1, number2);
  resultEl.textContent = result;
});

function multiply(number1, number2) {
  return number1 * number2;
}

multiplyBtn.addEventListener("click", function()  {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiply(number1, number2);
  resultEl.textContent = result;
});

function divide(number1, number2) {
  return number1 / number2;
}

divideBtn.addEventListener("click", function()  {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = divide(number1, number2);
  resultEl.textContent = result;
});
