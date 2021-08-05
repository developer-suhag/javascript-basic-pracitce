

function oddNumberCheck(number) {
    if (number % 2 != 0) {
        return true
    }
    else {
        return false
    }
    
}

let number = 51;
const oddNumber = oddNumberCheck (number);
console.log(oddNumber);

function oddCalculate(num) {
    for (let i = num; i <= endNumber; i++) {
        if (i % 2 != 0) {
            console.log('The ', i ,' number is odd');
        }
        // else {
        //     console.log('The ', i ,' number is Even');
        // }
    }
}
let endNumber = 130;

let calcute = oddCalculate (50);
