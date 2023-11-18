// routes.js

const express = require("express");
const todo = require("./todo");

function setupRoutes(app) {
  // Display the list of tasks
  app.get("/", (req, res) => {
    const tasks = todo.loadTasks();
    res.render("index", { tasks });
  });

  // Add a new task
  app.post("/add", (req, res) => {
    const newTask = req.body.newTask;
    const tasks = todo.loadTasks();
    tasks.push(newTask);
    todo.saveTasks(tasks);
    res.redirect("/");
  });

  // Mark a task as completed
  app.post("/complete", (req, res) => {
    const index = parseInt(req.body.taskIndex) - 1;
    const tasks = todo.loadTasks();
    tasks[index] = `[✔] ${tasks[index]}`;
    todo.saveTasks(tasks);
    res.redirect("/");
  });

  // Delete a task
  app.post("/delete", (req, res) => {
    const index = parseInt(req.body.taskIndex) - 1;
    const tasks = todo.loadTasks();
    tasks.splice(index, 1);
    todo.saveTasks(tasks);
    res.redirect("/");
  });
}

module.exports = setupRoutes;
