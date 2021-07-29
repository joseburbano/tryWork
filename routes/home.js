//librerias del servidor
const express = require("express");

const api = express.Router();

//importamos controlladores
const homeControllers = require("../controllers/homeControllers");
const deleteControllers = require("../controllers/deleteControllers");

//RUTAS DE USUARIO

//  incio
api.get("/", homeControllers.homePrueba);

//crear usuario
api.get("/nuevo-usuario", homeControllers.formularioUsuario);

//eliminar usuario
api.delete("/usuarios/:url", deleteControllers.eliminarUsuario);

module.exports = api;
