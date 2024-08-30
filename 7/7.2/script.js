const container = document.getElementById("data-container");
const create = document.getElementById("create-button");
create.onclick = () => document.forms.create.style.visibility = "visible";
document.forms.create.addEventListener("submit", postData);
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data) => renderData(data));
function renderData(data) {
    data.forEach((post) => {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const deleteButton = document.createElement("button");
        body.innerText = post.body;
        title.innerText = post.title;
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deletePost(div);
        div.classList.add("post");
        div.id = post.id;
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(deleteButton);
        container.appendChild(div);
    });
}
function postData(e) {
    e.preventDefault();
    document.forms.create.style.visibility = "hidden";
    const formData = new FormData(e.target);
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
        renderData([
            { ...data, title: formData.get("title"), body: formData.get("body") }
        ]);
    });
}
function deletePost(post) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: "DELETE"
    });
    post.remove();
}
export {};
