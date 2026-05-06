const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");

        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Usuń";
        deleteButton.classList.add("deleteBtn");

        deleteButton.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);

        saveTasks();
        renderTasks();

        taskInput.value = "";
    }
}

renderTasks();
