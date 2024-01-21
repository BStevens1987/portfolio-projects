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

function reset(show) {
  num1 = 'e';
  num2 = 'e';
  op = '';
  disp = String(show);
  display.textContent = disp;
};

function calculator(operator) {
  if (op=== '' || num1 === 'e' || num2 === 'e') {
    op = operator;
  }
  else if (op == 'divide' && Number(num2) == 0) {
    reset('Nice Try');
  }
  else {
    num1 = operate(num1, num2, op);
    op = operator;
    num2 = 'e';
    disp = num1;
    display.textContent = disp;
  }
};

function decimal() {
  if (num1 === 'e') {
    num1 = '0.';
    disp = '0.';
    display.textContent = disp;
  }
  else if (op === '' && !num1.includes('.')) {
    num1 = num1 + '.';
    disp = num1;
    display.textContent = disp;
  }
  else if (num1 != 'e' && op != '' && num2 === 'e'){
    num2 = '0.';
    disp = '0.';
    display.textContent = disp;
  }
  else if (num1 != 'e' && op != '' && num2 != 'e' && !num2.includes('.')){
    num2 = num2 + '.';
    disp = num2;
    display.textContent = disp;
  }
};

function sign() {
  if (num1 === 'e') {
  }
  else if (op === '' && !num1.includes('-')) {
    num1 = '-' + num1;
    disp = num1;
    display.textContent = disp;
  }
  else if (op === '' && num1.includes('-')) {
    num1 = num1.replace('-', '');
    disp = num1;
    display.textContent = disp;
  }
  else if (num1 != 'e' && op != '' && num2 != 'e' && !num2.includes('-')){
    num2 = '-' + num2;
    disp = num2;
    display.textContent = disp;
  }
  else if (num1 != 'e' && op != '' && num2 != 'e' && num2.includes('-')){
    num2 = num2.replace('-', '');
    disp = num2;
    display.textContent = disp;
  }
};

const buttonAC = document.querySelector("#buttonr1c1");
buttonAC.textContent = 'AC';
buttonAC.addEventListener('click', () => {
  reset('');
});

const buttonPercent = document.querySelector("#buttonr1c2");
buttonPercent.textContent = '√';

const buttonExponent = document.querySelector("#buttonr1c3");
buttonExponent.textContent = '**';
buttonExponent.addEventListener('click', () => {
  calculator('exponent');
});

const buttonMultiply = document.querySelector("#buttonr1c4");
buttonMultiply.textContent = '*';
buttonMultiply.addEventListener('click', () => {
  calculator('multiply');
});

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
buttonDivide.addEventListener('click', () => {
  calculator('divide');
});

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
  calculator('add');
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
buttonSubtract.addEventListener('click', () => {
  calculator('subtract');
});

const buttonZero = document.querySelector("#buttonr5c1");
buttonZero.textContent = '0';
buttonZero.addEventListener('click', () => {
  digit('0');
});

const buttonDecimal = document.querySelector("#buttonr5c2");
buttonDecimal.textContent = '.';
buttonDecimal.addEventListener('click', () => {
  decimal();
});

const buttonSign = document.querySelector("#buttonr5c3");
buttonSign.textContent = '+/-';
buttonSign.addEventListener('click', () => {
  sign();buttonPercent.addEventListener('click', () => {
    sign();
  });
});

const buttonEquals = document.querySelector("#buttonr5c4");
buttonEquals.textContent = '=';
buttonEquals.addEventListener('click', () => {
  if (op=== '' || num1 === 'e' || num2 === 'e') {
  }
  else if (op == 'divide' && Number(num2) == 0) {
    reset('Nice Try');
  }
  else {
    num1 = operate(num1, num2, op);
    num2 = 'e';
    disp = num1;
    display.textContent = disp;
  }
});
