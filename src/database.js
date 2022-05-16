//Me permite conectarme a la base de datos
const mongoose = require("mongoose");
//para inicializar mongodb escribís *mongod* en la consola

const URI = "mongodb://0.0.0.0:27017/"; //0.0.0.0 reemplaza localhost en versiones anteriores. ATENCIÓN 1
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    /*en vez de poner connect y la dirección lo ponés en una constante llamada URI asi después
si querés cambiar la base de datos cambias la constante y listo*/
    .then(db => console.log("DB se conectó"))
    .catch(err => console.error(err));

module.exports = mongoose;