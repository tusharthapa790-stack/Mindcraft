// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   profession: {
//      experience: 10,
//      position: "Software Engineer"
//   }
// }

// console.log(person.profession.position)
// person.profession.position = "Senior Software Engineer"
// console.log(person)

// const firstName = person.firstName
// console.log(firstName)
// const lastName = person.lastName
// console.log(lastName)
// const age = person.age
// console.log(age)
// const eyeColor = person.eyeColor
// console.log(eyeColor)


// const Calculator ={
//     brand: "Casio",
//     add: function(a, b) {
//         console.log(a + b)
//     },
//     sub: function(a, b) {
//         console.log(a - b)
//     }
// }

// console.log(Calculator)
// console.log(Calculator.brand)
// Calculator.add(5, 3)
// Calculator.sub(5, 3)

const person2 ={
    firstName: "Tushar",
    lastName: "Thapa",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

console.log(person2.fullName())
console.log(Object.keys(person2))
console.log(Object.values(person2))
console.log(Object.entries(person2))