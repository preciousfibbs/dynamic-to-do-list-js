document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Save current tasks array to localStorage
  function saveTasks() {
    const tasks = [];
    // Collect task texts from the DOM list items
    taskList.querySelectorAll("li").forEach(li => {
      // li.textContent includes 'Remove' button text, so strip it out
      // Better to store the task text in a data attribute or grab firstChild node value
      const taskText = li.firstChild.textContent.trim();
      tasks.push(taskText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add task function - optionally save to localStorage
  function addTask(taskText, save = true) {
    if (!taskText || taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.onclick = function () {
      taskList.removeChild(li);
      saveTasks(); // Update localStorage after removal
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    if (save) {
      saveTasks(); // Save after adding new task
    }
  }

  // Event listeners
  addButton.addEventListener("click", function () {
    addTask(taskInput.value);
    taskInput.value = "";
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value);
      taskInput.value = "";
    }
  });

  // Load tasks on initial page load
  loadTasks();
});

