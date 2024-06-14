//Methods that iterate over an array
//Methds that DO NOT modify the original array (Immutability)

//filter()

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

//reduce() case 1

const numberReduce = [1,2,3,4,5]
const sum = numberReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(numberReduce)
console.log(sum)

//reduce() case 2

const words = ['apple','banana','bye','banana','bye','bye']
const wordFrequency = words.reduce((accumulator,currentValue) => {
    console.log(accumulator,currentValue)
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator
}, {})
console.log(wordFrequency)