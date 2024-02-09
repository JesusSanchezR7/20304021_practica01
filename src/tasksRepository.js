// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let tasks = [
    { id: 1, title: "Task 1", description: "Do something" },
    { id: 2, title: "Task 2", description: "Do something else" },
  ];

// TOMAR TODAS LAS TAREAS 
function getAll() {
    return tasks;
}

// TOMAR UNA TAREA
function getById(taskId) {
    return tasks.find((t) => t.id === taskId);
}

// CREEAR UNA TAREA
function createTask(newTask) {
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
}

// ACTUALIZATION DE UNA TAREA
function updateTask(taskId, updatedTask) {
    const index = tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      return tasks[index];
    } else {
      return null;
    }
  }

// ELIMINACION DE UNA TAREA 
function deleteTask(taskId) {
    tasks = tasks.filter((t) => t.id !== taskId);
}

module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
    deleteTask,
  };
