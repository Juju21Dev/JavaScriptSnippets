// Programme convertisseur Kelvin, Celsius, Fahrenheit
// convertit des Kelvin en Celsius et en Fahrenheit
// date : 27/07/2020
// auteur : Julien Violette

// température en Kelvin
const kelvin = 293;

// température en Celsius
const celsius = kelvin - 273;

// température en Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// arrondit à l'entier
fahrenheit = Math.floor(fahrenheit);

// affichage de la température en Fahrenheit
console.log(`La température est de ${fahrenheit} degrés Fahrenheit.`);

// température en Newton
let newton = celsius * (33/100);

// arrondit à l'entier
newton = Math.floor(newton);

// affichage de la température en Newton
console.log(`La température est de ${newton} degrés Newton.`);