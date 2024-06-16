// ex Finding substring indices

const stringArray = ['apple','banana','ogrande','grape','banana','kiwi']

// const target = 'banana'

function findStringIndexInArray (array, target) {
    const result = {
        includesTargetString: false,
        firstOccurrenceIndex: -1,
        lastOccurrenceIndez: -1
    }
    array.forEach((element,index) => {
        if (element.includes(target)) {
            result.includesTargetString = true
            result.firstOccurrenceIndex = array.indexOf(target)
            result.lastOccurrenceIndez = array.lastIndexOf(target)
        }
    })
    return result
}

const result = findStringIndexInArray(stringArray,'banana')

console.log(result)