// declaring a variable

var firstName = "Suhag";

let lastName = "Al Amin";

const PIE = 3.14;

//mathematical operation addtion of 2 numbers
let number1 = 3;
let number2 = 5;
const totalNumber = number1 + number2;
console.log(totalNumber);

//subtraction of 2 numbers

const substractionNumber = number2 - number1;
console.log(substractionNumber);

// multiplication of 3 three numbers

let number3 = 4;
const multiplyNumbers = number1 * number2 * number3;
console.log(multiplyNumbers);

// division of 2 numbers

const dividedNumber = totalNumber / number3;
console.log(dividedNumber);

// modulus

const remainder = number2 % number3;
console.log(remainder);

// ARAY

let numbers = [23, 45, 54, 64, 76, 98];

let index = numbers.indexOf(45);
console.log("Index is ", index);
numbers[4] = 77;
console.log(numbers);
let secondIndex = numbers[2];
console.log(secondIndex);

// push, pop, shift, unshift

numbers.push(100);
console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

numbers.shift();
numbers.shift();
console.log(numbers);

numbers.unshift(22);
numbers.unshift(56);
numbers.unshift(56);
numbers.unshift(76);
console.log(numbers);

// comparision if else

let chickenPrice = 150;
let myBudget = 200;

if (chickenPrice <= myBudget) {
    console.log("Ami morgi dia vat khamo !!!");
} else {
    console.log("I will eat rice with smashed potato with lentil soap.");
}

// loop while loop

let whileNumber = 1;

while (whileNumber <= 7) {
    console.log("While loop result: ", whileNumber);
    whileNumber++;
}

// for loop

for (let i = 0; i <= 8; i++) {
    console.log("For loop result: ", i);
}

// function

function birngSingara(taka) {
    let singaraPrice = 5;
    let singara = taka / singaraPrice;
    return singara;
}

function remainingTaka(taka) {
    let singaraPrice = 5;
    let remianingTaka = taka % singaraPrice;
    return remianingTaka;
}
let moneyForSingara = 57;
const mySingara = birngSingara(moneyForSingara);
const totalSingara = parseInt(mySingara);
console.log("Ai nao tomar Singara: ", totalSingara);

const takafirbo = remainingTaka(moneyForSingara);
console.log("taka firse", takafirbo);

// Object

let fan = {
    color: "blue",
    wing: 3,
    speed: "35km/h",
    brand: "Super Star",
    switch: 4,
    price: 550,
};

console.log(fan);

let showProperty = fan.color;
console.log("The color is: ", showProperty);

// set value
fan.price = 600;
fan["price"] = 700;
let fanPirce = "price";
fan[fanPirce] = 1000;
console.log(fan);

// factorial with for loop

let factorial = 1;

for (let i = 1; i <= 7; i++) {
  factorial *= i;
}
console.log(factorial);

for (let i = 1; i <= 8; i++) {
  factorial *= i;
}
console.log(factorial);

// factorial with while loop

let factorial2 = 1;
let i = 1;
while (i <= 6) {
  factorial2 *= i;
    i++;
}

console.log(factorial2);
let factorail3 = 1;
i = 1;

while (i <= 5) {
  factorail3 *= i;
    i++;
}
console.log(factorail3);


// factorial with function 
function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <=num; i++) {
        factorial *= i;        
    }
    return factorial
}

let myFactorials = getFactorial(9);
console.log(myFactorials);

function getFactorial2(num2) {
    let factorail = 1;
    let i = 1 ;
    while (i <= num2) {
        factorial *= i;
    }
    return factorial
}

const myFactorials2 = getFactorial (5);
console.log(myFactorials2);

// factorial in reverse way 

function calculateFactorialInReverse(revNumber) {
    let factorail = 1;
    for (let i = revNumber; i >= 1 ; i--) {
        factorail *= i;        
    }
    return factorail;
}

const myReverseFacotorial = calculateFactorialInReverse(6);
console.log(myReverseFacotorial);


// recurvie factorial 

function recusvieFactorial(n) {
    if (n == 1) {
        return 1
    }
   return n * recusvieFactorial (n-1);
}

const myRecursionFactorial = recusvieFactorial(5);
console.log(myReverseFacotorial);