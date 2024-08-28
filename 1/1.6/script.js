const userName = prompt("Wie heisst du?");
const hours = new Date().getHours();
const dayTime = hours < 17 ? "Tag" : hours < 22 ? "Abend" : "Nacht";
alert(`Guten ${dayTime}, ${userName}!`);
export {};
