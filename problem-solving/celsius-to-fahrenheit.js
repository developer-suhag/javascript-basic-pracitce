// formula 
    // (33degree* 9 / 5) + 32;

function celsiusToFarenheit(temp) {
    let convertToCelsius = (temp * 9 / 5) + 32;
    return convertToCelsius
}

let temperatureInCelsius = 33;

const temperatureConvetedToFareneit = celsiusToFarenheit(temperatureInCelsius);

console.log(temperatureInCelsius, ' degrees Celsius temperature convert into Fahrenheit. And the result is ',temperatureConvetedToFareneit, ' degrees Fahrenheit.' );

let temperatureInCelsius2 = 43;

const temperatureConvetedToFareneit2 = celsiusToFarenheit(temperatureInCelsius2);

console.log(temperatureInCelsius2, ' degrees Celsius temperature convert into Fahrenheit. And the result is ',temperatureConvetedToFareneit2, ' degrees Fahrenheit.' );

let temperatureInCelsius3 = 23.7;

const temperatureConvetedToFareneit3 = celsiusToFarenheit(temperatureInCelsius3);

console.log(temperatureInCelsius3, ' degrees Celsius temperature convert into Fahrenheit. And the result is ',temperatureConvetedToFareneit3, ' degrees Fahrenheit.' );