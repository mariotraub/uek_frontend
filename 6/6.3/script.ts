//@ts-expect-error
const form = document.forms.form;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const friend: any = {};

    asArray(form.elements).forEach((elem: HTMLInputElement) => {
        if (elem.type === "submit") return;
        if (elem.type === "checkbox") {
            friend[elem.name] = elem.checked;
            return;
        }
        friend[elem.name] = elem.value;
    });

    console.log(friend);
});

function asArray(collection: any) {
    return [].slice.call(collection);
}