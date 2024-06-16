const ages = [21,25,30,19,22]

// every()

const allAreAdults = ages.every(age => age > 18)

console.log(ages)
console.log(allAreAdults)

// some()

const atLeastOneIsOver30 = ages.some(age => age > 30)

console.log(atLeastOneIsOver30)