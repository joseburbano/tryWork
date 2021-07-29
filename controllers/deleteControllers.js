const Users = require("../models/users");

//elminar proyecto
exports.eliminarUsuario = async (req, res, next) => {
  const { url } = req.params;

  const resultado = await Users.destroy({
    where: { url: url },
  });

  if (!resultado) {
    return next();
  }

  res.status(200).send("Tu usuario se a eliminado exitosamente!.");
};
