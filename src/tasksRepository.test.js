const tasksRepository = require("./tasksRepository")

describe("pruebas", ()=>{
    // PRUEBAS UNITARIAS -------------------------
    test("Obtener todas las tareas", ()=>{
        // ARRANGE --------------------------------
        let tasks = [];

        // ACT ------------------------------------  
        tasks = tasksRepository.getAll()

        // ASSERT ---------------------------------
        expect(tasks.length).toBe(2)
        expect(Array.isArray(tasks)).toBe(true)
    })

    test("Obtener una tarea por identificación", ()=>{
        // ARRANGE --------------------------------
        let task = {};

        // ACT ------------------------------------  
        task = tasksRepository.getById(1)

        // ASSERT ---------------------------------
        expect(task.title).toBe('Task 1')
    })

    test("Crear una tarea", ()=>{
        // ARRANGE --------------------------------
        const newTask = { id: 3, title: 'New Task' };

        // ACT ------------------------------------  
        tasksRepository.create(newTask);
        const tasks = tasksRepository.getAll();

        // ASSERT ---------------------------------
        expect(tasks.length).toBe(3);
        expect(tasks.find(task => task.id === newTask.id)).toEqual(newTask);
    })

    test("Actualizar una tarea", ()=>{
        // ARRANGE --------------------------------
        const updatedTask = { id: 1, title: 'Updated Task' };

        // ACT ------------------------------------  
        tasksRepository.update(updatedTask);
        const task = tasksRepository.getById(1);

        // ASSERT ---------------------------------
        expect(task.title).toBe('Updated Task');
    })

    test("Eliminar una tarea", ()=>{
        // ARRANGE --------------------------------
        const taskId = 1;

        // ACT ------------------------------------  
        tasksRepository.delete(taskId);
        const tasks = tasksRepository.getAll();

        // ASSERT ---------------------------------
        expect(tasks.length).toBe(1);
        expect(tasks.find(task => task.id === taskId)).toBeUndefined();
    })
})
