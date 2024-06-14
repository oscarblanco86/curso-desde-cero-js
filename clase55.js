// ex 1
let count = 0
// let sum = 0
const grades = [60, 79, 50, 80, 40, 81];
const passingGrades = grades.filter(grade => grade >= 70)
console.log('passing grades: ',passingGrades)
const averagePassingGrades = passingGrades.reduce((sum, grade) => sum + grade,0)/passingGrades.length
console.log('average: ',averagePassingGrades)