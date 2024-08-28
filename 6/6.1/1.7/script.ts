// @ts-ignore
const form = document.forms.form;
const num = form.elements.num;
const outElem = document.getElementById("out") as HTMLParagraphElement;

const rand = Math.floor(Math.random() * 100);

let guess: number | undefined = undefined;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    guess = parseInt(num.value);
    if (guess === rand) {
        out("Du hast gewonnen!");
        return;
    }
    out(guess > rand ? "Zu hoch!" : "Zu niedrig!");
});

function out(str: string) {
    outElem.innerText = str;
}

export {}