const tasksRepository = require("./tasksRepository")

describe("pruebas", ()=>{

    // PRUEBAS UNITARIAS -------------------------
    test("Obtener todas las tareas", ()=>{
        // ARRAGE --------------------------------
        let tasks = [];

        // ACT -----------------------------------  
        tasks = tasksRepository.getAll()

        // ASSERT --------------------------------
        expect(tasks.length).toBe(2)
        expect(tasks.length== 2).toBe(true)
        expect(typeof task == 'array')
    })

    test("Obtener una tarea por identificación", ()=>{
        // ARRAGE --------------------------------
        let tasks = {};

        // ACT -----------------------------------  
        tasks = tasksRepository.getById(1)

        //  ASSERT -------------------------------
        expect(task.title == 'Task 1').toBe(true)
        //expect(task.title == 'Task 100').toBe(false)
    })

})