document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements using correct IDs
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    // Use classList.add instead of setting className directly
    removeButton.classList.add("remove-btn");
  
    // On click, remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Add to DOM
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  // Event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
