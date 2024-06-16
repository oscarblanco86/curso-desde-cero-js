const morseCode1 = ['....','---'] // H O
const morseCode2 = [',-,,','.-'] // L A

// concat
const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage)


const morseCodeMessage2 = [].concat(morseCode1,morseCode2 )
console.log(morseCodeMessage2)

// Spread operator
function combineMorseMessages (morseCode1, morseCode2) {
    return[...morseCode1, ...morseCode2]
}
console.log(
    combineMorseMessages(morseCode1,morseCode2)
)

const numbers = [1,2,3]
const string = 'string'
console.log(combineMorseMessages(numbers, string));


// join()

const morseCodeMessageString =morseCodeMessage.join(' e ')
console.log(morseCodeMessageString)