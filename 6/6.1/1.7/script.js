// @ts-ignore
const form = document.forms.form;
const num = form.elements.num;
const outElem = document.getElementById("out");
const rand = Math.floor(Math.random() * 100);
let guess = undefined;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    guess = parseInt(num.value);
    if (guess === rand) {
        out("Du hast gewonnen!");
        return;
    }
    out(guess > rand ? "Zu hoch!" : "Zu niedrig!");
});
function out(str) {
    outElem.innerText = str;
}
export {};
