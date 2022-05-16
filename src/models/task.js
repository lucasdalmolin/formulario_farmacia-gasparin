//Definir los tipos de datos que se van a guardar en nuestro servidor 
//npm install mongoose --> permite conectarme a la base de datos y definir los datos de la misma

const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model("task", TaskSchema);