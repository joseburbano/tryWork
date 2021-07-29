//fremeword express
const express = require("express");
//body p
const bodyParser = require("body-parser");
const path = require("path");

//importamo el helpers con algunas funcioones
const helpers = require("./helpers");

//
const app = express();
const { API_VERSION } = require("./configVariables");

//habilitamos pug
app.set("view engine", "pug");

//añadimos carpeta de vistas
app.set("views", path.join(__dirname, "./views"));

//pasar var dump a la aplicacion
app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

//donde cargar los archivos estaticos
app.use(express.static("public"));

//Load routings
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/user");

//habilitar body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Header HTTP
//Configurar los headers HTTP para poder iniciar sesion
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Router Basic
app.use(`/`, homeRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
