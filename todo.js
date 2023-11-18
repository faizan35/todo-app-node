let tasks = [];

// Load tasks from memory
function loadTasks() {
  return tasks;
}

// Save tasks to memory
function saveTasks(updatedTasks) {
  tasks = updatedTasks;
}

module.exports = { loadTasks, saveTasks };
