// 3
// innerHTML instead of innerText render the button correctly
document.body.innerHTML += "Hello World!";

// 4
(document.getElementById("button") as HTMLButtonElement).onclick = () => {
    alert("Hello World!");
};