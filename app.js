document.addEventListener("DOMContentLoaded", () => {
  // Variables (calculator buttons and input values):
  const input = document.getElementById("input");
  const clear = document.getElementById("clear");
  const equals = document.getElementById("equals");
  const division = document.getElementById("division");
  const multiplication = document.getElementById("multiplication");
  const subtraction = document.getElementById("subtraction");
  const addition = document.getElementById("addition");
  const dot = document.getElementById("dot");
  const num0 = document.getElementById("num0");
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const num4 = document.getElementById("num4");
  const num5 = document.getElementById("num5");
  const num6 = document.getElementById("num6");
  const num7 = document.getElementById("num7");
  const num8 = document.getElementById("num8");
  const num9 = document.getElementById("num9");
  let x = null;
  let y = null;
  let operator = "";

  // Buttons:
  clear.addEventListener("click", () => {
    input.textContent = null;
  });
  num0.addEventListener("click", () => {
    input.textContent += 0;
  });
  num1.addEventListener("click", () => {
    input.textContent += 1;
  });
  num2.addEventListener("click", () => {
    input.textContent += 2;
  });
  num3.addEventListener("click", () => {
    input.textContent += 3;
  });
  num4.addEventListener("click", () => {
    input.textContent += 4;
  });
  num5.addEventListener("click", () => {
    input.textContent += 5;
  });
  num6.addEventListener("click", () => {
    input.textContent += 6;
  });
  num7.addEventListener("click", () => {
    input.textContent += 7;
  });
  num8.addEventListener("click", () => {
    input.textContent += 8;
  });
  num9.addEventListener("click", () => {
    input.textContent += 9;
  });
  dot.addEventListener("click", () => {
    input.textContent += ".";
    // dot.disabled = true;
  });
  addition.addEventListener("click", () => {
    xValue();
    operator = "addition";
    // input.textContent += " + ";
    // addition.disabled = true;
  });
  subtraction.addEventListener("click", () => {
    xValue();
    operator = "subtraction";
    // input.textContent += " - ";
    // subtraction.disabled = true;
  });
  multiplication.addEventListener("click", () => {
    xValue();
    operator = "multiplication";
    // input.textContent += " * ";
    // multiplication.disabled = true;
  });
  division.addEventListener("click", () => {
    xValue();
    operator = "division";
    // input.textContent += " / ";
    // division.disabled = true;
  });
  equals.addEventListener("click", () => {
    yValue();
    // input.textContent += " = ";
    // equals.disabled = true;
  });

  // Function: declares "x" value.
  function xValue() {
    x = Number(input.textContent);
    input.textContent = "";
    console.log(x);
  }
  // Function: declares "y" value and runs operation.
  function yValue() {
    y = Number(input.textContent);
    switch (operator) {
      case "addition":
        input.textContent = x + y;
        break;
      case "subtraction":
        input.textContent = x - y;
        break;
      case "multiplication":
        input.textContent = x * y;
        break;
      case "division":
        input.textContent = x / y;
        break;
    }
    console.log(y);
  }
});
