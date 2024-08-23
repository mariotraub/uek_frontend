"use strict";
// 1
const newReleases = document.getElementsByClassName("games")[0].childNodes;
console.log(newReleases);
// 2
const secondBestseller = document.getElementsByClassName("games")[1].childNodes[1];
console.log(secondBestseller);
// 3
const lastFreeToPlay = document.getElementsByClassName("games")[2].lastChild;
console.log(lastFreeToPlay);
// 4
const bestsellerLis = document.getElementsByClassName("games")[1].querySelectorAll("li");
console.log(bestsellerLis);
// 5
// @ts-expect-error
const h1 = document.querySelector("h1");
console.log(h1);
// 6
const gameOfTheDay = document.getElementById("game-of-the-day");
console.log(gameOfTheDay);
// 7
const sales = document.getElementsByClassName("sale");
console.log(sales);
