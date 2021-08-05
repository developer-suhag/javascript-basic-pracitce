// simple interest calculation formula 
// this is not the right formula
// A = P (1 + rt)
// A	=	final amount
// P	=	initial principal balance
// r	=	annual interest rate
// t	=	time (in years)
// THIS IS THE RIGHT FORMULA    
// Simple Interest= P x R x T ÷ 100

function interestCalculation(principalBalance, annualInterestRate, time) {
    let totalAnnualInterest = (principalBalance * annualInterestRate * time) / 100;
    return totalAnnualInterest;
}

let initialBalance = 5000;

let interestRates = 5;

let totalTime = 5;

const finalAmount = interestCalculation (initialBalance, interestRates, totalTime);

const totalAmounts = finalAmount + initialBalance;

console.log('Total Amount after 5 % interest in 5 years is: ', totalAmounts);

console.log('And the interest amount is: ', finalAmount);