const container = document.querySelector('#container');

for(let row = 1; row <= 5; row++) {
  const rowContainer = document.createElement('div');
  rowContainer.id = 'row';
  container.append(rowContainer);
  for(let column = 1; column <= 4; column++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.id = 'button'+ 'r' + row + 'c' + column;
    rowContainer.append(button);
  };
};

function add (a, b) {
  return Number(a) + Number(b);
};

function subtract (a, b) {
  return a - b;
};

function multiply (a, b) {
  return a * b;
};

function divide (a, b) {
  return a / b;
};

function exponent (a, b) {
  return a ** b;
};

let num1 = 'e';
let num2 = 'e';
let op = '';
let disp = '';

function operate(a, b, operation) {
  if (operation == 'add') {
    op = 'add';
    return add(a, b);
  }
  else if (operation == 'subtract') {
    op = 'subtract';
    return subtract(a, b);
  }
  else if (operation == 'multiply') {
    op = 'multiply';
    return multiply(a, b);
  }
  else if (operation == 'divide') {
    op = 'divide';
    return divide(a, b);
  }
  else if (operation == 'exponent') {
    op = 'exponent';
    return exponent(a, b);
  }
};

const display = document.querySelector('#display');

function digit(a) {
  if (num1 === 'e') {
    num1 = a;
    disp = a;
    display.textContent = disp;
  }
  else if (op === '') {
    num1 = num1 + a;
    disp = num1;
    display.textContent = disp;
  }
  else if (num1 != 'e' && op != '' && num2 === 'e'){
    num2 = a;
    disp = a;
    display.textContent = disp;
  }
  else if (num1 != 'e' && op != '' && num2 != 'e'){
    num2 = num2 + a;
    disp = num2;
    display.textContent = disp;
  }
};

console.log(disp);

const buttonAC = document.querySelector("#buttonr1c1");
buttonAC.textContent = 'AC';

const buttonSign = document.querySelector("#buttonr1c2");
buttonSign.textContent = '+/-';

const buttonExponent = document.querySelector("#buttonr1c3");
buttonExponent.textContent = '**';

const buttonMultiply = document.querySelector("#buttonr1c4");
buttonMultiply.textContent = '*';

const buttonNine = document.querySelector("#buttonr2c1");
buttonNine.textContent = '9';
buttonNine.addEventListener('click', () => {
  digit('9');
});

const buttonEight = document.querySelector("#buttonr2c2");
buttonEight.textContent = '8';
buttonEight.addEventListener('click', () => {
  digit('8');
});

const buttonSeven = document.querySelector("#buttonr2c3");
buttonSeven.textContent = '7';
buttonSeven.addEventListener('click', () => {
  digit('7');
});

const buttonDivide = document.querySelector("#buttonr2c4");
buttonDivide.textContent = '/';

const buttonSix = document.querySelector("#buttonr3c1");
buttonSix.textContent = '6';
buttonSix.addEventListener('click', () => {
  digit('6');
});

const buttonFive = document.querySelector("#buttonr3c2");
buttonFive.textContent = '5';
buttonFive.addEventListener('click', () => {
  digit('5');
});

const buttonFour = document.querySelector("#buttonr3c3");
buttonFour.textContent = '4';
buttonFour.addEventListener('click', () => {
  digit('4');
});

const buttonAdd= document.querySelector("#buttonr3c4");
buttonAdd.textContent = '+';
buttonAdd.addEventListener('click', () => {
  if (op==='') {
    op = 'add';
  }
  else {
    op = 'add';
    num1 = operate(num1, num2, op);
    num2 = 'e';
    disp = num1;
    display.textContent = disp;
  }
});

const buttonThree = document.querySelector("#buttonr4c1");
buttonThree.textContent = '3';
buttonThree.addEventListener('click', () => {
  digit('3');
});

const buttonTwo = document.querySelector("#buttonr4c2");
buttonTwo.textContent = '2';
buttonTwo.addEventListener('click', () => {
  digit('2');
});

const buttonOne = document.querySelector("#buttonr4c3");
buttonOne.textContent = '1';
buttonOne.addEventListener('click', () => {
  digit('1');
});

const buttonSubtract= document.querySelector("#buttonr4c4");
buttonSubtract.textContent = '-';

const buttonZero = document.querySelector("#buttonr5c1");
buttonZero.textContent = '0';
buttonZero.addEventListener('click', () => {
  digit('0');
});

const buttonDecimal = document.querySelector("#buttonr5c2");
buttonDecimal.textContent = '.';

const buttonPercent = document.querySelector("#buttonr5c3");
buttonPercent.textContent = '%';

const buttonEquals = document.querySelector("#buttonr5c4");
buttonEquals.textContent = '=';
