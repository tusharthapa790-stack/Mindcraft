import { books, toJSON } from './library.mjs';
import * as math from './mathUtil.mjs';

console.log(math.add(5, 3));        
console.log(math.subtract(10, 4));  
console.log(math.default(2, 6));   


console.log(math.Operation); 


console.log("=====================================");


const jsonString = toJSON(books);
console.log(jsonString);

const parsedBooks = JSON.parse(jsonString);

console.log("\n--- Book Titles Loop ---");
for (const book of parsedBooks) {
    console.log(book.title);
}

