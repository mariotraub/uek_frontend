import type { Task } from "./types";
import { baseUrl } from "./config.js";

const todoContainer = document.getElementById("todo-container")!;
const createButton = document.getElementById("create") as HTMLButtonElement;
// @ts-expect-error
const createForm = document.forms.create as HTMLFormElement;
// @ts-expect-error
const editForm = document.forms.edit as HTMLFormElement;
const logoutButton = document.getElementById("logout") as HTMLButtonElement;

logoutButton.onclick = logout;

createButton.onclick = showCreateForm;
createForm.addEventListener("submit", createTask);

editForm.addEventListener("submit", editTask);

if (!(await isLoggedIn())) {
   window.location.href = "login.html";
}

let todos = await readTodos();

renderTodos(todos);

async function isLoggedIn() {
    return (await fetch(`${baseUrl}/status`, {
        credentials: "include"
    })).status !== 401;
}

async function logout() {
    await fetch(`${baseUrl}/logout`, {
        method: "POST",
        credentials: "include"
    });
    window.location.reload();
}

async function deleteTask(e: Event) {
    const id = parseInt((e.target as HTMLButtonElement).parentElement?.id!!);
    await fetch(`${baseUrl}/task/${id}`, {
        method: "DELETE",
        credentials: "include"
    });
    todos = todos.filter(todo => todo.id !== id);
    renderTodos(todos);
}

async function showEditForm(e: Event) {
    const id = (e.target as HTMLButtonElement).parentElement?.id;
    //@ts-expect-error
    editForm.elements.id.value = parseInt(id);
    editForm.style.visibility = "visible";
}

async function editTask(e: Event) {
    e.preventDefault();
    console.log("here")
    const formData = new FormData(editForm);
    //@ts-expect-error
    formData.set("completed", !!formData.get("completed"));
    const task = await (await fetch(`${baseUrl}/tasks`, {
        method: "PUT",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })).json() as Task;

    const updated = todos.find((todo) => todo.id === task.id);
    if (updated) {
        updated.completed = task.completed;
        updated.title = task.title;
    }
    renderTodos(todos);
    editForm.style.visibility = "hidden";
}

async function createTask(e: Event) {
    e.preventDefault();
    const formData = new FormData(createForm);
    const task = await (await fetch(`${baseUrl}/tasks`, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })).json() as Task;
    todos.push(task);
    renderTodos(todos);
    createForm.style.visibility = "hidden";
}

function showCreateForm() {
    createForm.style.visibility = "visible";
}

async function readTodos() {
    return await (await fetch(`${baseUrl}/tasks`, {
        credentials: "include"
    })).json() as Task[];
}

async function renderTodos(todos: Task[]) {
    todoContainer.replaceChildren(...todos.map(todo => {
        const task = document.createElement("div");
        task.classList.add("task");
        const completed = document.createElement("div");
        completed.classList.add(todo.completed ? "complete" : "incomplete");
        completed.classList.add("checkbox");
        const title = document.createElement("h2");
        title.classList.add("title");

        const edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.onclick = showEditForm;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = deleteTask;

        task.appendChild(deleteButton);
        task.appendChild(edit);

        title.innerText = todo.title;

        task.appendChild(completed);
        task.appendChild(title);
        task.id = todo.id.toString();

        return task;
    }));
}