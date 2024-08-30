const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
const counterText = document.getElementById('counter');

let counter = 0;

function updateCounter(value: number) {
    counter = value;
    counterText.innerText = counter;
    history.pushState({}, "", `?c=${counter}`);
}

function initCounter() {
    const urlParams = new URLSearchParams(window.location.search);
    const counterParam = parseInt(urlParams.get('c'));
    if (!isNaN(parseInt(counterParam))) {
        updateCounter(parseInt(counterParam));
    } else {
        updateCounter(counter);
    }
}

incrementButton.onclick = () => updateCounter(counter + 1);
decrementButton.onclick = () => updateCounter(counter - 1);