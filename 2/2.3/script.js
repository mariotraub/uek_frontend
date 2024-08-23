"use strict";
// 1
document.body.style.backgroundColor = "green";
// 2
// @ts-ignore
const h1 = document.querySelector("h1");
// @ts-ignore
h1.innerText = "Mario";
// 3
document.querySelector("p").classList.add("large");
// 4
const li = document.createElement("li");
li.innerText = "new";
const ul = document.querySelector("ul");
ul.appendChild(li);
// 5
ul.getElementsByTagName("li")[1].remove();
// 6
const img = document.createElement("img");
img.src = "data:image/jpeg;base64,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";
//@ts-ignore
h1.insertAdjacentElement('afterend', img);
// 7
const lis = [];
for (let i = 0; i < 10; i++) {
    const loopLi = document.createElement("li");
    loopLi.innerText = `List item ${i}`;
    lis.push(loopLi);
}
ul.append(...lis);
// 8
document.body.style.backgroundColor = getRandomColor();
function getRandomColor() {
    return `rgb(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()})`;
}
function getRandomRgbValue() {
    return Math.floor(Math.random() * 256);
}
