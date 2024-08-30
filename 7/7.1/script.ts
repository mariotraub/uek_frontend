const container = document.getElementById("data-container")!;

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data: Data[]) => renderData(data));

function renderData(data: Data[]) {
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

interface Data {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export {}