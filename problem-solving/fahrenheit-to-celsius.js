// formula
// (91degree farenheit - 32) * 5 / 9

function farenheitToCelsius(temp) {
    let convertIntoCelsius = (temp - 32) * 5 / 9 ;
    return convertIntoCelsius
}

let givienTemperature = 93;

const temperatureConvetedToCelsius = Number(farenheitToCelsius(givienTemperature).toFixed(2));

console.log( givienTemperature, ' degrees Farenheit temperature convert into Celsius. And the result is ', temperatureConvetedToCelsius, 'degrees Celsius.');

let temperatureInFarenheit2 = 104;

const temperatureConvertedToCelsius2 = Number(farenheitToCelsius(temperatureInFarenheit2));

console.log(temperatureInFarenheit2, ' degrees Celsius temperature convert into Fahrenheit. And the result is ',temperatureConvertedToCelsius2, ' degrees Fahrenheit.' );

let temperatureInFarenheit3 = 120;

const temperatureConvertedToCelsius3 = Number(farenheitToCelsius(temperatureInFarenheit3).toFixed(2));

console.log(temperatureInFarenheit3, ' degrees Celsius temperature convert into Fahrenheit. And the result is ',temperatureConvertedToCelsius3, ' degrees Fahrenheit.' );

let kisoAkta = 45.645656;

let res = Number((kisoAkta).toFixed(2))
console.log(res);