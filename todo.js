// todo.js

const fs = require("fs");

const todoFilePath = "todo.txt";

// Check if the todo.txt file exists, if not, create it
if (!fs.existsSync(todoFilePath)) {
  fs.writeFileSync(todoFilePath, "");
}

// Load tasks from the todo.txt file
function loadTasks() {
  const data = fs.readFileSync(todoFilePath, "utf8");
  return data.split("\n").filter((task) => task.trim() !== "");
}

// Save tasks to the todo.txt file
function saveTasks(tasks) {
  fs.writeFileSync(todoFilePath, tasks.join("\n"));
}

module.exports = { loadTasks, saveTasks };
