const container = document.getElementById("data-container")!;
document.forms.create.addEventListener("submit", postData);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data: Data[]) => renderData(data));

function renderData(data: Data[]) {
    console.log(data)
    data.forEach((post: Data) => {
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

function postData(e: Event) {
    e.preventDefault();

    const formData = new FormData(e.target)
    console.log(formData)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => renderData([{...formData, ...data}]));
}

interface Data {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export {}