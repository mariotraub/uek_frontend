const div = document.querySelector(".start")!! as HTMLDivElement;

div.onclick = () => {
    div.classList.toggle("end");
};