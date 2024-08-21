"use strict";
const numbers = [];
while (true) {
    const input = prompt("Enter a number");
    if (!input) {
        break;
    }
    const num = parseFloat(input);
    if (isNaN(num)) {
        alert("Invalid number");
    }
    else {
        numbers.push(num);
    }
}
alert(numbers.reduce((acc, cur) => acc + cur));
