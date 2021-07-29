const { createConnection } = require("mysql2/promise");
const Sequelize = require("sequelize");
const slug = require("slug");
const shortid = require("shortid");

const db = require("../config/db");

const Usuarios = db.define(
  "usuarios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cedula: Sequelize.STRING,
    nombres: Sequelize.STRING,
    apellidos: Sequelize.STRING,
    telefono: Sequelize.STRING,
    profesion: Sequelize.STRING,
    url: Sequelize.STRING,
  },
  {
    hooks: {
      //before create es una funcion que corre antes de que se cree la el registro
      beforeCreate(usuario) {
        const url = slug(usuario.nombres).toLowerCase();

        usuario.url = `${url}-${shortid.generate()}`;
      },
    },
  }
);

module.exports = Usuarios;
