document.addEventListener("DOMContentLoaded", () => {
  // Variables (calculator buttons and input values):
  const calculator = document.getElementById("calculator");
  const operatorDisplay = document.getElementById("operator-display");
  const input = document.getElementById("input");
  const clear = document.getElementById("clear");
  const del = document.getElementById("del");
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
  const log = document.getElementById("log");

  // Buttons: Clear and Delete.
  clear.addEventListener("click", () => {
    input.textContent = null;
    operator = "";
    operatorDisplay.textContent = "";
    x = null;
    y = null;
    dot.disabled = false;
    log.innerHTML = null;
  });
  del.addEventListener("click", () => {
    let array = input.textContent;
    input.textContent = null;
    for (let i = 0; i < array.length - 1; i++) {
      input.textContent += array[i];
    }
  });

  // Buttons: Numbers and dot.
  num0.addEventListener("click", () => {
    input.textContent += 0;
    if (!dot.disabled) {
      input.textContent = Number(
        input.textContent.replace(/,/g, "")
      ).toLocaleString();
    }
  });
  num1.addEventListener("click", () => {
    input.textContent += 1;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num2.addEventListener("click", () => {
    input.textContent += 2;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num3.addEventListener("click", () => {
    input.textContent += 3;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num4.addEventListener("click", () => {
    input.textContent += 4;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num5.addEventListener("click", () => {
    input.textContent += 5;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num6.addEventListener("click", () => {
    input.textContent += 6;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num7.addEventListener("click", () => {
    input.textContent += 7;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num8.addEventListener("click", () => {
    input.textContent += 8;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  num9.addEventListener("click", () => {
    input.textContent += 9;
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
  });
  dot.addEventListener("click", () => {
    input.textContent += ".";
    dot.disabled = true;
  });

  // Buttons: Operators and equals.
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
    operatorDisplay.textContent = "x";
  });
  division.addEventListener("click", () => {
    if (operator == "") {
      xValue();
    } else {
      xValueOperator();
    }
    operator = "division";
    dot.disabled = false;
    operatorDisplay.textContent = "÷";
  });
  equals.addEventListener("click", () => {
    yValue();
    dot.disabled = false;
    operatorDisplay.textContent = "=";
  });

  // Function: declares "x" value.
  function xValue() {
    x = Number(input.textContent.replace(/,/g, ""));
    input.textContent = "";
    console.log(x);
  }
  // Function: declares "y" value and runs operation.
  function yValue() {
    y = Number(input.textContent.replace(/,/g, ""));
    addLog();
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
      default:
        input.textContent = y;
        break;
    }
    input.textContent = Number(
      input.textContent.replace(/,/g, "")
    ).toLocaleString();
    operator = "";
    console.log(y);
  }
  // Function: declares "x" when an operator is in use
  function xValueOperator() {
    y = Number(input.textContent.replace(/,/g, ""));
    addLog();
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
    console.log(x, y);
  }

  // Event listener: adds keyboard functionality
  calculator.addEventListener("keydown", (event) => {
    event.preventDefault();
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
      case "Backspace":
        del.click();
        break;
      case "Escape":
        clear.click();
        break;
      default:
        break;
    }
  });

  // Function: fills log with operations.
  function addLog() {
    const li = document.createElement("li");
    log.append(li);

    let textX = document.createElement("textarea");
    textX.setAttribute("class", "text");
    // Experiment
    textX.textContent = x;
    textX.textContent = Number(
      textX.textContent.replace(/,/g, "")
    ).toLocaleString();
    //
    li.append(textX);

    let textOperator = document.createElement("textarea");
    textOperator.setAttribute("class", "text-operator");
    textOperator.textContent = operatorDisplay.textContent;
    li.append(textOperator);

    let textY = document.createElement("textarea");
    textY.setAttribute("class", "text");
    textY.textContent = y;
    // Experiment
    textY.textContent = Number(
      textY.textContent.replace(/,/g, "")
    ).toLocaleString();
    //
    li.append(textY);

    let h3EqualsSign = document.createElement("h3");
    h3EqualsSign.setAttribute("class", "equal-sign");
    h3EqualsSign.textContent = "=";
    li.append(h3EqualsSign);

    let h3Equals = document.createElement("h3");
    h3Equals.setAttribute("class", "equal-answer");
    switch (operatorDisplay.textContent) {
      case "+":
        h3Equals.textContent =
          Number(textX.textContent.replace(/,/g, "")) +
          Number(textY.textContent.replace(/,/g, ""));
        break;
      case "-":
        h3Equals.textContent =
          Number(textX.textContent.replace(/,/g, "")) -
          Number(textY.textContent.replace(/,/g, ""));
        break;
      case "x":
        h3Equals.textContent =
          Number(textX.textContent.replace(/,/g, "")) *
          Number(textY.textContent.replace(/,/g, ""));
        break;
      case "÷":
        h3Equals.textContent =
          Number(textX.textContent.replace(/,/g, "")) /
          Number(textY.textContent.replace(/,/g, ""));
        break;
      case "=":
        textX.textContent = "";
        h3Equals.textContent = Number(textY.textContent.replace(/,/g, ""));
        break;
      default:
        h3Equals.textContent = Number(textY.textContent.replace(/,/g, ""));
        break;
    }
    h3Equals.textContent = Number(
      h3Equals.textContent.replace(/,/g, "")
    ).toLocaleString();
    li.append(h3Equals);
    console.log(log.childNodes[0].childNodes);
  }
});
