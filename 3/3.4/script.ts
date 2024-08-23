// @ts-ignore
const container = document.getElementById("destinations")!!;
const choose = document.getElementById("choose")!!;
const destinations: HTMLLIElement[] = [].slice.call(container.children);

choose.onclick = selectRandomDestination;
function selectRandomDestination() {
    // Remove the selected class from all destinations
    destinations.forEach(destination => destination.classList.remove("selected"));

    const randomIndex = Math.floor(Math.random() * destinations.length);
    destinations[randomIndex].classList.add("selected");
}