/*-------------------------------- Constants --------------------------------*/
const display = document.querySelectorAll('.display')[0];
const buttons = document.querySelectorAll('.button');


/*-------------------------------- Variables --------------------------------*/
let num1 = '';
let num2 = '';
let total = 0
let operator;
let clearButton = '';
let firstNumberCompleted = false


/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
  });
});

/*-------------------------------- Functions --------------------------------*/

  const calculator = document.querySelector('#calculator');
  calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
       if(firstNumberCompleted !==true){
        num1 += event.target.innerText
        display.innerText = num1
       } else {
        num2 += event.target.innerText
        display.innerText = num2
       }
       console.log(num1, num2);
    }
    
    // Example
    if (event.target.innerText === '+') {
        firstNumberCompleted = true;
        operator = '+';
    }

    if (event.target.innerText === '-') {
        firstNumberCompleted = true;
        operator = '-';
     }

    if (event.target.innerText === '*') {
        firstNumberCompleted = true;
        operator = '*';
     }

     if (event.target.innerText === '/') {
        firstNumberCompleted = true;
        operator = '/';
     }

     if(event.target.innerText === '=') {
        if (operator ==='+') {
            total = parseInt(num1) + parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        } else  if (operator ==='-') {
            total = parseInt(num1) - parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        } else if (operator === '*') {
            total = parseInt(num1) * parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        } else if (operator === '/') {
            total = parseInt(num1) / parseInt(num2)
            console.log(total)
            num1 = ''
            num2 = ''
        }
        display.innerText = total
        total = 0;
        firstNumberCompleted = false;
    }})