"use strict";
//@ts-expect-error
const form = document.forms.form;
const pw = form.elements.pw;
const pw2 = form.elements.pw2;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = pw.value;
    if (password !== pw2.value) {
        pw2.setCustomValidity("Passwords do not match");
        return;
    }
    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
        pw.setCustomValidity("Password must contain at least one number, one lowercase letter and one uppercase letter");
        return;
    }
    if (pw.validity.required) {
        pw.setCustomValidity("Password is required");
        return;
    }
    alert("Passwords match!");
});
document.getElementById("show").onclick = () => {
    pw.type = pw.type === "password" ? "text" : "password";
    pw2.type = pw2.type === "password" ? "text" : "password";
};
