// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue
//     }
//     console.log(i) }
    

// array.forEach(function(value, index, array) {
//     console.log(value, index, array)
// })

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"]
// fruits.forEach((fruits, index) => {
//     console.log(fruits, index)
// })

// for (const fruit of fruits) {
//     console.log(fruit)
// }


// const person = {
//     firstName: "John",
//     lastName: "Doe"}

// for (const key in person) {
//     console.log(key, person[key])
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers)

// const evenNumbers = numbers.filter(num => num % 2 === 0)
// console.log(evenNumbers)

// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum)

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers)
console.log(`Original numbers array: ${numbers}`)

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)
console.log(`Original numbers array: ${numbers}`)