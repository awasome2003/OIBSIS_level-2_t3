// script.js
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const pendingTasksUl = document.getElementById("pending-tasks");
  const completedTasksUl = document.getElementById("completed-tasks");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(text) {
    const taskId = Date.now();
    const li = document.createElement("li");
    li.setAttribute("data-id", taskId);
    li.innerHTML = `
            <span>${text}</span>
            <div class="actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

    pendingTasksUl.appendChild(li);

    li.querySelector(".complete-btn").addEventListener("click", () => {
      markComplete(taskId);
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      deleteTask(taskId);
    });
  }

  function markComplete(id) {
    const li = document.querySelector(`li[data-id='${id}']`);
    if (li) {
      li.classList.add("completed");
      completedTasksUl.appendChild(li);
      li.querySelector(".complete-btn").remove();
    }
  }

  function deleteTask(id) {
    const li = document.querySelector(`li[data-id='${id}']`);
    if (li) {
      li.remove();
    }
  }
});
