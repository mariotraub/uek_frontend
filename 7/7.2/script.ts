const container = document.getElementById("data-container")!;
const create = document.getElementById("create-button")!;

create.onclick = () => document.forms.create.style.visibility = "visible";
document.forms.create.addEventListener("submit", postData);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data: Data[]) => renderData(data));

function renderData(data: Data[]) {
    data.forEach((post: Data) => {
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

function postData(e: Event) {
    e.preventDefault();
    document.forms.create.style.visibility = "hidden";

    const formData = new FormData(e.target)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        renderData(
            [
                {...data, title: formData.get("title") as string, body: formData.get("body") as string}
            ]
        )
    });
}

function deletePost(post: HTMLDivElement) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: "DELETE"
    });
    post.remove();
}

interface Data {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export {}