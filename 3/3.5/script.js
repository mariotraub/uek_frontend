const container = document.getElementById("container");
const cantons = [
    "AG", "AI", "AR", "BE", "BL", "BS", "FR", "GE", "GL", "GR",
    "JU", "LU", "NE", "NW", "OW", "SG", "SH", "SO", "SZ",
    "TG", "TI", "UR", "VD", "VS", "ZG", "ZH"
];
shuffle(cantons);
const cover = document.createElement("div");
cover.classList.add("cover");
const counterElement = document.getElementById("counter");
let counter = 0;
const cantonsCpy = [...cantons.slice(0, 10)];
const all = shuffle(cantonsCpy.concat(cantonsCpy));
container.append(...all.map((c) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    img.src = `img/${c}.png`;
    img.alt = c;
    img.classList.add("canton-img");
    div.append(img);
    div.id = c;
    div.classList.add("canton");
    div.onclick = clickHandler;
    div.append(cover.cloneNode());
    return div;
}));
let selections = {
    first: undefined,
    second: undefined
};
const elements = [].slice.call(container.children);
let blocked = false;
async function clickHandler(e) {
    if (blocked) {
        return;
    }
    let target = e.target;
    while (!target.classList.contains("canton")) {
        target = target.parentElement;
    }
    if (target.classList.contains("selected")) {
        return;
    }
    if (target.classList.contains("right")) {
        return;
    }
    if (!selections.first) {
        selections.first = target;
        selections.first.classList.add("selected");
    }
    else if (!selections.second) {
        selections.second = target;
        selections.second.classList.add("selected");
    }
    if (selections.first && selections.second) {
        if (selections.first.id === selections.second.id) {
            selections.first.classList.add("right");
            selections.second.classList.add("right");
        }
        else {
            blocked = true;
            await new Promise(r => setTimeout(r, 1000));
            selections.first.classList.remove("selected");
            selections.second.classList.remove("selected");
            incrementCounter();
        }
        selections = { first: undefined, second: undefined };
    }
    if (elements.every(e => e.classList.contains("right"))) {
        alert("You won!");
        if (confirm("Restart?")) {
            window.location.reload();
        }
    }
    blocked = false;
}
function incrementCounter() {
    counter++;
    counterElement.innerText = counter.toString();
}
function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
}
export {};
