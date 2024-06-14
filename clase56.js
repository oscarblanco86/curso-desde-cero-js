// find()

const multipleOfFive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const firstNumberGreaterThen10 = multipleOfFive.find((number) => number > 10);

const firstNumberGreaterThen20 = multipleOfFive.find((number) => number > 20);

console.log("Primer numero mayor que 10: ", firstNumberGreaterThen10);

console.log("Primer numero mayor que 20: ", firstNumberGreaterThen20);

// findeIndex()

const randomNumber = [6,4,3,4,6,14,56,40,70,80]

const indexNumber = randomNumber.findIndex(number => number > 50)

console.log('Numeros aleatorios: ',randomNumber)

console.log('Indice: ',indexNumber)