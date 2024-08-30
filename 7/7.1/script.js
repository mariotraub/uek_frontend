const container = document.getElementById("data-container");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data) => renderData(data));
function renderData(data) {
    data.forEach((post) => {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        body.innerText = post.body;
        title.innerText = post.title;
        div.classList.add("post");
        div.appendChild(title);
        div.appendChild(body);
        container.appendChild(div);
    });
}
export {};
