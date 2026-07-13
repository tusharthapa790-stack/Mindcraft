// Part 1: Using Variables, Arrays & Loops
const items = ["Milk", "Bread", "Eggs", "Coffee", "Butter"];
const prices = [2.5, 1.8, 3.2, 6.0, 4.4];

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


// Part 2: Using map(), filter(), reduce()
const cart = [
    { name: "Milk", price: 2.5 },
    { name: "Bread", price: 1.8 },
    { name: "Eggs", price: 3.2 },
    { name: "Coffee", price: 6.0 },
    { name: "Butter", price: 4.4 },
];

const receiptLines = cart.map(item => `${item.name} - Rs.${item.price.toFixed(2)}`);  // 1. map() - Receipt lines
receiptLines.forEach(line => console.log(line));
const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);  // 2. reduce() - Total price

console.log("-------------------");
console.log(`Total: Rs.${cartTotal.toFixed(2)}`);

const expensiveItems = cart.filter(item => item.price > 3);   // 3. filter() - Items over Rs3.00
console.log(`Items over Rs.3.00: ${expensiveItems.length}`);

const discountedCart = cart.map(item => ({     // Bonus: 10% Discount using map()
    name: item.name,
    price: item.price * 0.9
}));

const discountedTotal = discountedCart.reduce(
    (sum, item) => sum + item.price,
    0
);

console.log(`Total after 10% off: Rs.${discountedTotal.toFixed(2)}`);