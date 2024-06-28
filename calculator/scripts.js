function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = evaluateExpression(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  expression = expression
    .replace(/PI/g, "Math.PI")
    .replace(/E/g, "Math.E")
    .replace(/sqrt/g, "Math.sqrt")
    .replace(/log/g, "Math.log")
    .replace(/\^/g, "**")
    .replace(/sin/g, "Math.sin")
    .replace(/cos/g, "Math.cos")
    .replace(/tan/g, "Math.tan");
  return eval(expression);
}
