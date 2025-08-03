document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      li.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  });
});
