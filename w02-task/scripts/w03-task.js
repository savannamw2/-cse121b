/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subNumbers1 = Number(document.querySelector('#subtract1').value);
    let subNumbers2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumbers1, subNumbers2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
    return factor1 * factor2;
}

const multiplyNumbers = () => {
    let multiple1 = Number(document.querySelector('#factor1').value);
    let multiple2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiple1, multiple2);
} 

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor); 
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */

let currentDate =  new Date();
let currentYear; 
currentDate = currentDate.getFullYear();
document.getElementById('year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

/* Output Source Array */
document.querySelector('#array').innerHTML = numbers;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML =  numbers.filter(number => number % 2 != 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbers.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML =  numbers.reduce((sum , number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let sumOfNumbers = numbers.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfNumbers.reduce((sum, number) => sum + number);
