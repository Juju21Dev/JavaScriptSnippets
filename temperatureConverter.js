// Program Temperature Converter
// converts into Celsius, Fahrenheit and Newton
// date : 27/07/2020
// author : Julien Violette

const kelvin = 293;

const celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);