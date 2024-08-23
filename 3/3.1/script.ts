// 1
const button = document.getElementById("button")!!;
button.onclick = () => alert("Hello World!");

// 2

let counter = 0;
// @ts-expect-error
const h1 = document.createElement("h1");

h1!!.innerText = counter.toString();

document.body.prepend(h1!!);

const setCounter = () => {
    counter++;
    //@ts-expect-error
    h1.innerText = counter.toString();
}
button.onclick = setCounter;

// 3
const button2 = document.createElement("button")!!;
button2.innerText = "Click me!";

const setCounter2 = () => {
    counter2++;
    h1_2.innerText = counter2.toString();
}
button2.onclick = setCounter2;
let counter2 = 0;
const h1_2 = document.createElement("h1");
h1_2.innerText = counter2.toString();

document.body.prepend(h1_2, button2);

// 3
const ball = document.getElementById("ball")!!;
const ballContainer = document.getElementById("ball-container")!!;

ballContainer.onclick = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
}