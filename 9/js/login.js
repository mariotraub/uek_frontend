import { baseUrl } from "./config.js";
//@ts-expect-error
const loginForm = document.forms.login;
loginForm.addEventListener("submit", login);
function login(e) {
    e.preventDefault();
    const formData = new FormData(loginForm);
    fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }).then(res => {
        if (res.status === 200) {
            window.location.href = "index.html";
        }
    });
}
