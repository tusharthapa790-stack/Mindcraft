const booksCollection = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Matrix", author: "Wachowskis", year: 1999 }
];

export function toJSON(books) {
    return JSON.stringify(books, null, 2);
}

export { booksCollection as books };
