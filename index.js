const app = require("./app");
const port = process.env.PORT || 4000;
const { API_VERSION, IP_SERVER } = require("./configVariables");

//importamos la base de datos la conexion
const db = require("./config/db");

//importamos modelos
require("./models/users");

//crear conexion a la base de datos
db.sync()
  .then(
    () => console.log("Conectado a la base de datos"),

    app.listen(port, () => {
      console.log("#####");
      console.log("API REST EXTINTORES");
      console.log("#####");
      console.log("#####");
      console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      console.log("Servidor Funcionando");
    })
  )
  .catch((error) => console.log(error));
