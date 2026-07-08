// Use const where values don't change
const name = "Tushar Thapa";
const age = 20;
const email = "tusharthapa@gamil.com";
const isAdmin = false;
const favoriteNumber = 14;
const address = null;

// Computed values
const ageInMonths = age * 12;
const ageInDays = age * 365; // Approximate
const canVote = age >= 18;
const isEven = favoriteNumber % 2 === 0;

// Print formatted summary using template literals
console.log(`
===== User Summary =====
Name: ${name} Age: ${age} Email: ${email} Admin: ${isAdmin} 
Favorite Number: ${favoriteNumber} Address: ${address} `);

// Print computed values
console.log(`Age in Months: ${ageInMonths}`);
console.log(`Age in Days (Approx): ${ageInDays}`);
console.log(`Can Vote: ${canVote}`);
console.log(`Favorite Number is Even: ${isEven}`);


isAdmin && console.log("User has administrator privileges."); // using &&
console.log(`Address: ${address || "Address not provided"}`); // using ||