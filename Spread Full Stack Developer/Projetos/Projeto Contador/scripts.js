var currentNumberWrapper = document.getElementById('currentNumber');
var buttonIncrement = document.getElementById('increment');
var buttonDecrement = document.getElementById('decrement');
var currentNumber = 0;

function updateDisplay() {
  currentNumberWrapper.innerHTML = currentNumber;
  colorChange();
   
  buttonIncrement.disabled = currentNumber >= 15;
  buttonDecrement.disabled = currentNumber <= -15;
}

function increment() {
  if (currentNumber < 15) {
    currentNumber++;
    updateDisplay();
  } else {
    alert("Valor máximo atingido!");
  }
}

function decrement() {
  if (currentNumber > -15) {
    currentNumber--;
    updateDisplay();
  } else {
    alert("Valor mínimo atingido!");
  }
}

function colorChange() {
  currentNumberWrapper.style.color = currentNumber < 0 ? 'red' : 'black';
}

// link buttons to functions
buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);
