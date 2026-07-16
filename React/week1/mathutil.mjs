export function add(a, b) {
    Operation('addition');
    return a + b;
}

export function subtract(a, b) {
    Operation('subtraction');
    return a - b;
}

export default function multiply(a, b) {
    Operation('multiplication');
    return a * b;
}

function Operation(Name) {
    console.log(`[MathUtils] Running ${Name}...`);
}