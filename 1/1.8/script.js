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
const operator = prompt("Enter an operator (+, -, *, /)");
if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    throw new Error("Invalid operator");
}
alert(numbers.reduce((acc, cur) => eval(`${acc} ${operator} ${cur}`)));
