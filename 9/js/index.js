const todoContainer = document.getElementById("todo-container");
renderTodos();
export async function renderTodos() {
    const todos = await (await fetch("http://localhost/tasks")).json();
    todos.forEach(todo => {
        const task = document.createElement("div");
        task.classList.add("task");
        const completed = document.createElement("div");
        completed.classList.add(todo.completed ? "complete" : "incomplete");
        completed.classList.add("checkbox");
        const title = document.createElement("h2");
        title.classList.add("title");
        title.innerText = todo.title;
        task.appendChild(completed);
        task.appendChild(title);
        todoContainer.appendChild(task);
    });
}
