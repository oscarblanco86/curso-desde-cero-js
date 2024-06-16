// Copying an array

const originalArray = [1,2,3,4,5,6]
const copyOfArray = [...originalArray]

console.log(originalArray)
console.log(copyOfArray)

// combining

const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

// creating arrays with additional elementes

const baseArray = [1,2,3]
const arrayWithAddtonalElements = [...baseArray,4,5,6]

console.log(baseArray)
console.log(arrayWithAddtonalElements)

function sum (a,b,c) {
    return a + b + c
}

const numbers = [1,2,3]
const result = sum(...numbers)

console.log(result)