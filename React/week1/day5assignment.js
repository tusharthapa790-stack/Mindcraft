// Grocery Store Receipt

const items = ["Milk", "Bread", "Eggs", "Coffee", "Butter"];
const prices = [2.5, 1.8, 3.2, 6.0, 4.4];

const cart = [
    { name: "Milk", price: 2.5 },
    { name: "Bread", price: 1.8 },
    { name: "Eggs", price: 3.2 },
    { name: "Coffee", price: 6.0 },
    { name: "Butter", price: 4.4 },
];

// ========================
// Part 1 - Arrays & Loop

let total = 0;
let overThree = 0;
let maxPrice = prices[0];
let mostExpensive = items[0];

for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} - Rs.${prices[i].toFixed(2)}`);

    total += prices[i];

    if (prices[i] > 3) {
        overThree++;
    }

    if (prices[i] > maxPrice) {
        maxPrice = prices[i];
        mostExpensive = items[i];
    }
}

console.log("-------------------");
console.log(`Total: Rs.${total.toFixed(2)}`);
console.log(`Items over Rs.3.00: ${overThree}`);
console.log(`Most expensive: ${mostExpensive}`);


// ========================
// Part 2 - map, filter, reduce

console.log("\nUsing map():");

cart
    .map(item => `${item.name} - Rs.${item.price.toFixed(2)}`)
    .forEach(line => console.log(line));

const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
console.log("-------------------");
console.log(`Total: Rs.${cartTotal.toFixed(2)}`);

const expensiveItems = cart.filter(item => item.price > 3);
console.log(`Items over Rs.3.00: ${expensiveItems.length}`);

const discountedTotal = cart
    .map(item => ({
        name: item.name,
        price: item.price * 0.9
    }))
    .reduce((sum, item) => sum + item.price, 0);

console.log(`Total after 10% off: Rs.${discountedTotal.toFixed(2)}`);


// ========================
// Part 3 - forEach, for...of, for...in

console.log("\nUsing forEach():");

cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - Rs.${item.price.toFixed(2)}`);
});

console.log("-------------------");

let totalForOf = 0;

for (const item of cart) {
    totalForOf += item.price;
}

console.log(`Total: Rs.${totalForOf.toFixed(2)}`);
console.log("-------------------");
console.log("Keys and values:");

for (const key in cart[0]) {
    console.log(`${key}: ${cart[0][key]}`);
}