const buttonNumbers = document.getElementsByName("data-number");
const buttonOpera = document.getElementsByName("data-opera");
const buttonIgual = document.getElementsByName("data-igual")[0];
const buttonDelete = document.getElementsByName("data-delete")[0];
let result = document.getElementById("result");
let opeActual = "";
let opeAnterior = "";
let operation = undefined;

buttonNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
  });
});

buttonOpera.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOpera(button.innerText);
  });
});

buttonIgual.addEventListener("click", function () {
  calculate();
  actualizarDisplay();
});

buttonDelete.addEventListener("click", function () {
  clear();
  actualizarDisplay();
});

function selectOpera(op) {
  if (opeActual === "") return;
  if (opeAnterior !== "") {
    calculate();
  }

  operation = op.toString();
  opeAnterior = opeActual;
  opeActual = "";
}

// Calcular
function calculate() {
  let calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operation) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operation = undefined;
  opeAnterior = "";
}

function addNumber(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operation = undefined;
}

function actualizarDisplay() {
  result.value = opeActual;
}
