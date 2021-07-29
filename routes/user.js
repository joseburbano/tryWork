//librerias del servidor
const express = require("express");

const api = express.Router();

//importamos express validator
const { body } = require("express-validator");

//importamos controlladores
const userControllers = require("../controllers/createUsers/createUser");

//RUTAS DE USUARIO

//crear usuario
api.post(
  "/nuevo-usuario",
  body("cedula", "nombres", "apellidos", "telefono", "profesion")
    .not()
    .isEmpty()
    .trim()
    .escape(),
  userControllers.newUser
);

// ver o listar todos los usuarios
api.get("/usuarios/:url", userControllers.usuarioPorUrl);

//actualizar usuario
api.get("/usuario/editar/:id", userControllers.formularioEditar);
api.post(
  "/nuevo-usuario/:id",
  body("cedula", "nombres", "apellidos", "telefono", "profesion")
    .not()
    .isEmpty()
    .trim()
    .escape(),
  userControllers.actualizarUsuario
);

module.exports = api;
