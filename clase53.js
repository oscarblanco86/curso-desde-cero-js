//Methods that itrate over an array
//Methods that DO NOT modify the original array (immutaility)

//map

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map( num => num * num)

console.log(numbers)
console.log(squaredNumbers)

//forEach()

const colors = ['red','pink','blue']
const iteratedColors = colors.forEach(color => console.log(color))


//ex 1

const temps = [32, 68, 95, 104, 212];
const iteratedTemps = temps.map(temp => (5/9)*(temp-32))
console.log(temps)
console.log(iteratedTemps)

//Exercise Fahrenheit to Celsius conversion

const temperaturasInFarenheit = [32,68,95,104,212]
const temperaturasInCelsius = temperaturasInFarenheit.map(Fahrenheit => (5/9)*(Fahrenheit-32))
console.log("Temperatures In Fahrenheit: ", temperaturasInFarenheit);
console.log("Temperatures In Celsius: ", temperaturasInCelsius);

// ex 1

const values = [1,2,3,4,5,6]
let sumex = 0
const iteratedValues = values.forEach(value => sumex += value)
console.log(values)
console.log("The SUM of all values is: ",sumex)

//Exercise: su of elements in an Array

const newNumbers = [1,2,3,5]
let sum = 0
newNumbers.forEach(number => {
    sum += number
})

console.log("Array of numbers: ", newNumbers)
console.log("Sum of numbers: ",sum)