//definir operaciones mediante URLS que van a suceder en nuestro servidor
const express = require("express");
const task = require("../models/task");
const router = express.Router();

const Task = require("../models/task"); //Modelo guardado en constante. Permite hacer consultas a la base de datos.
//utilizo express para manejar las respuestas del servidor cuando le llegue una petición de determinada ruta
router.get("/", async(req, res) => { //ATENCIÓN 2. método de manejo de tareas async/await.
    const tasks = await task.find();
    res.json(tasks);
});

//....................................RECIBIR OBJETOS 1 SOLO OBJETO POR ID.........................................

router.get("/:id", async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//.......................................ENVIAR Y RECIBIR OBJETOS..................................................
router.post("/", async(req, res) => { //Enviar datos. esto es lo que se trabaja con formularios
    const { title, description } = (req.body);
    const task = new Task({ title, description });
    await task.save(); //Guarda el objeto o tarea
    res.json({ status: "Objeto cargado" });
})

//........................................ACTUALIZAR OBJETOS.......................................................
router.put("/:id", async(req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({ status: "Objeto actualizado" });
})

//........................................ELIMINAR OBJETOS.........................................................
router.delete("/:id", async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ status: "Objeto eliminado" });
});


module.exports = router;