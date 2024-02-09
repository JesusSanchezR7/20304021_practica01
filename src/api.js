const bodyParser = require('body-parser');
const tasksRepository =  require("./tasksRepository");
const express = require('express');

//////////////////////
const app = express();
app.use(bodyParser.json());

//TAREAS
let tasks = [
  { id: 1, title: 'Task 1', description: 'Do something' },
  { id: 2, title: 'Task 2', description: 'Do something else' },
];

app.get("/issue", (req, res) => {
  res.json(issue);
});

// TOMAR TODAS LAS TAREAS
app.get('/tasks', (req, res) => {
  const tasks = tasksRepository.getAll()
  res.json(tasks);
});

// TOMAR UNA TAREA EN ESPECIFICO
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasksRepository.getById(taskId)

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// CREEAR UNA TAREA
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasksRepository.createTask(newTask)
  res.status(201).json(newTask);
});

// ACTUALIZACION DE UNA TAREA 
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const task = tasksRepository.updateTask(taskId, updatedTask)

  if (task != null) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// ELIMINACION DE UNA TAREA
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasksRepository.deleteTask(taskId)
  res.sendStatus(204);
});

module.exports = app;


