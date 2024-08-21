const rand = Math.floor(Math.random() * 100);

let guess: number | undefined = undefined;

while (true) {
    guess = parseInt(prompt("Rate eine Zahl zwischen 0 und 100") as string);
    if (guess === rand) {
        alert("Du hast gewonnen!");
        break;
    }
    alert(guess > rand ? "Zu hoch!" : "Zu niedrig!");
}