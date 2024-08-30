"use strict";
const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
const counterText = document.getElementById('counter');
let counter = 0;
function updateCounter(value, replace = false) {
    counter = value;
    counterText.innerText = counter;
    if (replace) {
        history.replaceState({ counter: counter }, "", `?c=${counter}`);
    }
    else {
        history.pushState({ counter: counter }, "", `?c=${counter}`);
    }
}
window.addEventListener("load", (e) => {
    if (e.state?.counter) {
        updateCounter(e.state.counter);
    }
    else {
        initCounter();
    }
});
function initCounter() {
    const urlParams = new URLSearchParams(window.location.search);
    const counterParam = parseInt(urlParams.get('c'));
    if (!isNaN(counterParam)) {
        updateCounter(counterParam);
    }
    else {
        updateCounter(counter);
    }
}
incrementButton.onclick = () => updateCounter(counter + 1);
decrementButton.onclick = () => updateCounter(counter - 1);
window.onpopstate();
