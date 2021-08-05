// A = (p * r * t) / 100
// This will show the interest amount
// to see the final amonut after interest, have to add pincipal amount with interest amount

function calculateInterest(p, r, t) {
    const totalInterest = (p * r * t) / 100;
    console.log('Total interest is: ', totalInterest);
    const totalAmount = p + totalInterest;
    return totalAmount;
}
// initial principal balance
let principalBalance = 10000;

const interestRates = 7 ;

const totalTime = 5;

let totalAmountAfterInterest = calculateInterest ( principalBalance, interestRates, totalTime);

console.log(' And. Total amount after interest is ', totalAmountAfterInterest);

// principal Balance changed
principalBalance = 13000;

totalAmountAfterInterest = calculateInterest ( principalBalance, interestRates, totalTime);

console.log(' And. Total amount after interest is ', totalAmountAfterInterest);


// principal Balance changed


principalBalance = 55000;

totalAmountAfterInterest = calculateInterest (principalBalance, interestRates, totalTime)

console.log(' And. Total amount after interest is ', totalAmountAfterInterest);

// principal Balance changed


principalBalance = 100000;

totalAmountAfterInterest = calculateInterest (principalBalance, interestRates, totalTime)

console.log(' And. Total amount after interest is ', totalAmountAfterInterest);

// principal Balance changed


principalBalance = 500000;

totalAmountAfterInterest = calculateInterest (principalBalance, interestRates, totalTime)

console.log(' And. Total amount after interest is ', totalAmountAfterInterest);


// principal Balance changed

principalBalance = 1000000;


totalAmountAfterInterest = calculateInterest (principalBalance, interestRates, totalTime)

console.log(' And. Total amount after interest is ', totalAmountAfterInterest);
