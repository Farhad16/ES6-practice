// normal function 

function add(num1, num2) {
    return num1 + num2;
}

// function using variable 

const doubleIt = function double(number) {
    return number * 2;
}

// add tow number using arrow function

const multiply = num => num * 2;
const justReturn = () => 5;
const addTwoNumber = (x, y) => x + y;

// Multiline arrow function 

const getResult = (num1, num2) => {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const result = sum * sub;
    return result;
}

const addNum = add(10, 15);
const double = doubleIt(25);
const multiplyNum = multiply(100);
const justreturn = justReturn();
const addTwo = addTwoNumber(100, 500);
const result = getResult(70, 50);

console.log(addNum, double, multiplyNum, justreturn, addTwo, result);