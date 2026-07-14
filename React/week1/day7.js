// let numbers = [1, 2, 3, 4, 5]
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// console.log("Original numbers:", numbers)
// console.log("Original fruits:", fruits)

// const copyNumbers = [...numbers]
// copyNumbers.push(6)
// const copyFruits = [...fruits]
// const copyJoined = [...numbers, ...fruits]

// console.log("Copied numbers:", copyNumbers)
// console.log("Copied fruits:", copyFruits)
// console.log("Joined copy:", copyJoined)


// let person = {
//     name: "Tushar",
//     age: 30,
//     city: "Pokhara"
// }
// let school = {
//     name: "ABC School",
//     location: "Kathmandu"
// }
// console.log("Original person:", person)

// const copyPerson = { ...person }
// const copySchool = { ...school }
// const copyJoined = { ...person, ...school }

// console.log("Copied person:", copyPerson)   
// console.log("Copied school:", copySchool)
// console.log("Joined copy:", copyJoined)


// function sum(a, b, c) {
//     return a + b + c;
// }

// console.log(sum(1, 2, 3))

// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3))


const medal = ["Gold", "Silver", "Bronze"]
const [first, ...rest] = medal

console.log(first)
console.log(rest)

const user = {
    id: 1,
    name: "Tushar",
    password: "1234",
    email: "jbdv"
}
const { password, ...userWithoutPassword } = user
console.log(userWithoutPassword)