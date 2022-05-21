document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const input = document.getElementById("input");
  const ac = document.getElementById("ac");
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

  ac.addEventListener("click", () => {
    input.value = null;
  });
  num0.addEventListener("click", () => {
    input.value += 0;
  });
  num1.addEventListener("click", () => {
    input.value += 1;
  });
  num2.addEventListener("click", () => {
    input.value += 2;
  });
  num3.addEventListener("click", () => {
    input.value += 3;
  });
  num4.addEventListener("click", () => {
    input.value += 4;
  });
  num5.addEventListener("click", () => {
    input.value += 5;
  });
  num6.addEventListener("click", () => {
    input.value += 6;
  });
  num7.addEventListener("click", () => {
    input.value += 7;
  });
  num8.addEventListener("click", () => {
    input.value += 8;
  });
  num9.addEventListener("click", () => {
    input.value += 9;
  });
  
});
