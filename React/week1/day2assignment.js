const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.length)
console.log(fruits.at(2))
console.log(fruits.join(" + "))
console.log(fruits.pop())
console.log(fruits)
fruits.push("Cherry")
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift("Pineapple")
console.log(fruits)
console.log(fruits[4] = "Kiwi")
console.log(fruits)
console.log(Array.isArray(fruits))
delete fruits[0]
console.log(fruits)
const arr1 = ["Cecilie", "Lone"]
const arr2 = ["Emil", "Tobias", "Linus"]
const arr3 = ["Robin", "Morgan"]
console.log(arr1.concat(arr2, arr3))

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString())