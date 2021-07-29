const { Sequelize } = require("sequelize");
const { DB_URL, PORT_DB } = require("../configVariables");

const db = new Sequelize("tryworknode", "manuel", "1234", {
  host: DB_URL,
  dialect: "mysql",
  port: PORT_DB,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
