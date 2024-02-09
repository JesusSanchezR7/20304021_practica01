const tasksRepository = require("./tasksRepository");

    // prueba unitaria
    describe("pruebas", () => {
    // Tomar todas las tareas
    test("Get all tasks", () => {
            // Arrange
            let tasks = [];
            // Act
            tasks = tasksRepository.getAll();
            // Assert
            expect(tasks.length).toBe(2);
            expect(tasks.length === 2).toBe(true);
            expect(Array.isArray(tasks)).toBe(true);
        });
    });

    
    // tomar una tarea 
    test("Get one task by id", () => {
        // Arrage
        let tasks = {};
        // Act
        task = tasksRepository.getById(1);
        // Assert
        expect(task.title == "Task 1").toBe(true);
    });
      
    // Prueba para crear una tarea
    describe("createTask", () => {
        test("Create a new task", () => {
          // Arrange
          const newTask = { title: "New Task", description: "Do something new" };
          // Act
          tasksRepository.createTask(newTask);
          // Assert
          expect(tasksRepository.getAll().length).toBe(3);
          expect(tasksRepository.getById(3)).toEqual({ id: 3, ...newTask });
        });
    });

    // Prueba para actualizar una tarea
    describe("updateTask", () => {
        test("Update existing task", () => {
          // Arrange
          const taskId = 1;
          const updatedTask = {
            title: "Updated Task",
            description: "Updated description",
          };
          // Act
          const updatedTaskResult = tasksRepository.updateTask(taskId, updatedTask);
          // Assert
          expect(updatedTaskResult).toEqual({ id: 1, ...updatedTask });
          expect(tasksRepository.getById(taskId)).toEqual(updatedTaskResult);
        });
    });

    // Prueba para eliminar una tarea
    test("Delete a task", () => {
        // Arrage
        let tasks = [];
        // Act
        tasks = tasksRepository.getAll();
        const task = 1;
        tasksRepository.deleteTask(task);
        expect(tasks.find((task) => task.id === task)).toBeUndefined();
    });
