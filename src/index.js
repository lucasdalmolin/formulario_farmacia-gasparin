//archivo de express, de node. Nos va a permitir crear e INICIALIZAR el servidor
//control shift p --> abrir terminal ---> npm init --yes para abrir proyecto en node 

const express = require("express"); //Pide la librería express. 
//NOTA: Antes tenés que tener instalado express en el directorio de la aplicación. (npm install express)
const morgan = require("morgan"); //Pide módulo morgan instalado.
const path = require("path");
/*se encarga de unir directorios. Es porque si estás en windows para los directorios
la barra invertida. En linux no por ej. Para hacerte más fácil la vida usas este módulo cuando quieras poner una dir*/
const { mongoose } = require("./database");

const app = express();


//Settings
app.set("port", process.env.PORT || 3000); //define que tome el puerto que me da el servidor si está en la nube O el 3000)

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/tasks", require("./routes/task-routes")); //Cuando se ingrese al servidor /api/tasks 

//Static Files
app.use(express.static(path.join(__dirname, "public"))); //carpeta "public" es enviada al navegador. el static de express encuentra la public
//console.log(__dirname + "/public"); usarias algo así si no tuvieras el path

//Starting the server
app.listen(app.get("port"), () => { //Si no creaste una ruta en el servidor te va a tirar un error por defecto cuando te conectes
    console.log(`servidor en puerto ${app.get("port")}`);
});