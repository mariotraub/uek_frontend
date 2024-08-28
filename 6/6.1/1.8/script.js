const numbers = [];
// @ts-ignore
const form = document.forms.form;
const num = form.elements.num;
const op = form.elements.op;
const outElem = document.getElementById("out");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numInput = num.value;
    console.log(numInput);
    if (numInput.trim() === "") {
        const operator = op.value;
        if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
            throw new Error("Invalid operator");
        }
        out(numbers.reduce((acc, cur) => eval(`${acc} ${operator} ${cur}`)).toString());
        return;
    }
    const parsedNum = parseFloat(numInput);
    if (isNaN(parsedNum)) {
        out("Invalid number");
        return;
    }
    else {
        numbers.push(parsedNum);
    }
});
function out(str) {
    outElem.innerText = str;
}
export {};
