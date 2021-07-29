const Users = require("../../models/users");

exports.newUser = async (req, res) => {
  const { cedula, nombres, apellidos, telefono, profesion } = req.body;
  const usuarios = await Users.findAll();

  let errores = [];

  if (!cedula || !nombres || !apellidos || !telefono || !profesion) {
    errores.push({
      texto: "Porfavor verifica que todos los campos esten llenos",
    });
  }

  //si hay errores

  if (errores.length > 0) {
    res.render("nuevoUsuario", {
      nombrePagina: "Nuevo Usuario",
      code: 404,
      errores,
      usuarios,
    });
  } else {
    await Users.create({
      cedula,
      nombres,
      apellidos,
      telefono,
      profesion,
    });
  }
};

exports.usuarioPorUrl = async (req, res, next) => {
  const usuariosPromise = Users.findAll();

  const usuarioPromise = Users.findOne({
    where: {
      url: req.params.url,
    },
  });

  const [usuarios, usuario] = await Promise.all([
    usuariosPromise,
    usuarioPromise,
  ]);

  if (!usuario) {
    res.redirect("/");
    return next();
  }

  res.render("datos", {
    nombrePagina: "Datos del usuario",
    code: 200,
    usuario,
    usuarios,
  });
};

exports.formularioEditar = async (req, res, next) => {
  const usuariosPromise = Users.findAll();

  const usuarioPromise = Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  const [usuarios, usuario] = await Promise.all([
    usuariosPromise,
    usuarioPromise,
  ]);

  if (!usuario) {
    res.redirect("/");
    return next();
  }

  res.render("nuevoUsuario", {
    nombrePagina: "Editar Usuario",
    code: 200,
    usuarios,
    usuario,
  });
};
exports.actualizarUsuario = async (req, res, next) => {
  const { cedula, nombres, apellidos, telefono, profesion } = req.body;
  const usuarios = await Users.findAll();

  let errores = [];

  if (!cedula || !nombres || !apellidos || !telefono || !profesion) {
    errores.push({
      texto: "Porfavor verifica que todos los campos esten llenos",
    });
  }

  //si hay errores

  if (errores.length > 0) {
    res.render("nuevoUsuario", {
      nombrePagina: "Nuevo Usuario",
      code: 404,
      errores,
      usuarios,
    });
  } else {
    await Users.update(
      {
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        profesion: profesion,
      },
      { where: { id: req.params.id } }
    );
    res.redirect("/");
  }
};

