"use strict";
//@ts-expect-error
const form = document.forms.form;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const friend = {};
    asArray(form.elements).forEach((elem) => {
        if (elem.type === "submit")
            return;
        if (elem.type === "checkbox") {
            friend[elem.name] = elem.checked;
            return;
        }
        friend[elem.name] = elem.value;
    });
    console.log(friend);
});
function asArray(collection) {
    return [].slice.call(collection);
}
