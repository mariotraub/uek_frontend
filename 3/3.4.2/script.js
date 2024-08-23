"use strict";
// @ts-ignore
const container = document.getElementById("container");
const cups = [].slice.call(container.children);
const shuffle = document.getElementById("shuffle");
const counterP = document.getElementById("counter");
// @ts-ignore
let counter = 0;
counterP.innerText = `Counter: ${counter}`;
shuffleFun();
cups.forEach((cup) => cup.onclick = (e) => {
    //@ts-ignore
    e.target.classList.toggle("lift");
    //@ts-ignore
    if (!e.target.querySelector("#ball")) {
        counter++;
        counterP.innerText = `Counter: ${counter}`;
    }
    else {
        alert("You found the ball!");
        counter = 0;
    }
});
shuffle.onclick = shuffleFun;
function shuffleFun() {
    cups.forEach((cup) => cup.classList.remove("lift"));
    cups.sort(() => 0.5 - Math.random());
    container.replaceChildren(...cups);
}
