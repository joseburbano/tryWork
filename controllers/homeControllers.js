const Users = require("../models/users");

exports.homePrueba = async (req, res) => {
  const usuarios = await Users.findAll();

  res.render("index", {
    nombrePagina: "Usuarios",
    usuarios,
  });
};

exports.formularioUsuario = async (req, res) => {
  const usuarios = await Users.findAll();
  res.render("nuevoUsuario", {
    nombrePagina: "Nuevo Usuario",
    usuarios,
  });
};
