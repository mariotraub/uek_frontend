// @ts-ignore
const form = document.forms.form;
const nameInput = form.elements.name;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const userName = nameInput.value;

    const hours = new Date().getHours();

    const dayTime = hours < 17 ? "Tag" : hours < 22 ? "Abend" : "Nacht";

    alert(`Guten ${dayTime}, ${userName}!`);
});

export {};