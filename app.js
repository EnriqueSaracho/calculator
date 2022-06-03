document.addEventListener("DOMContentLoaded", () => {
  // Variables (calculator buttons and input values):
  const operatorDisplay = document.getElementById("operator-display");
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
    operator = "";
    x = null;
    y = null;
    dot.disabled = false;
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
    dot.disabled = true;
  });
  addition.addEventListener("click", () => {
    if (operator == "") {
      xValue();
    } else {
      xValueOperator();
    }
    operator = "addition";
    dot.disabled = false;
    operatorDisplay.textContent = "+";
  });
  subtraction.addEventListener("click", () => {
    if (operator == "") {
      xValue();
    } else {
      xValueOperator();
    }
    operator = "subtraction";
    dot.disabled = false;
    operatorDisplay.textContent = "-";
  });
  multiplication.addEventListener("click", () => {
    if (operator == "") {
      xValue();
    } else {
      xValueOperator();
    }
    operator = "multiplication";
    dot.disabled = false;
    operatorDisplay.textContent = "*";
  });
  division.addEventListener("click", () => {
    if (operator == "") {
      xValue();
    } else {
      xValueOperator();
    }
    operator = "division";
    dot.disabled = false;
    operatorDisplay.textContent = "/";
  });
  equals.addEventListener("click", () => {
    yValue();
    dot.disabled = false;
    operatorDisplay.textContent = "";
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
    operator = "";
    console.log(y);
  }
  // Function: declares "x" when an operator is in use
  function xValueOperator() {
    y = Number(input.textContent);
    switch (operator) {
      case "addition":
        x = x + y;
        break;
      case "subtraction":
        x = x - y;
        break;
      case "multiplication":
        x = x * y;
        break;
      case "division":
        x = x / y;
        break;
    }
    input.textContent = "";
    console.log(x);
  }

  // Event listener: adds keyboard functionality
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "0":
        num0.click();
        break;
      case "1":
        num1.click();
        break;
      case "2":
        num2.click();
        break;
      case "3":
        num3.click();
        break;
      case "4":
        num4.click();
        break;
      case "5":
        num5.click();
        break;
      case "6":
        num6.click();
        break;
      case "7":
        num7.click();
        break;
      case "8":
        num8.click();
        break;
      case "9":
        num9.click();
        break;
      case ".":
        dot.click();
        break;
      case "+":
        addition.click();
        break;
      case "-":
        subtraction.click();
        break;
      case "*":
        multiplication.click();
        break;
      case "/":
        division.click();
        break;
      case "Enter":
        equals.click();
        break;
      default:
        break;
    }
  });
});
