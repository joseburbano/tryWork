import Swal from "sweetalert2";
import axios from "axios";

const btnEliminar = document.querySelector("#eliminar-usuario");

if (btnEliminar) {
  btnEliminar.addEventListener("click", (e) => {
    const urlUsuario = e.target.dataset.usuarioUrl;

    Swal.fire({
      title: "Deseas borrar este usuario?",
      text: "Un usuario eliminado no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "No, Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        //enviar peticion a axxios
        const url = `${location.origin}/usuarios/${urlUsuario}`;

        //envar
        axios
          .delete(url, { params: urlUsuario })
          .then(function (respuesta) {
            Swal.fire("Usuario Eliminado!", respuesta.data, "success");

            //redireccionar al inicio

            setTimeout(() => {
              window.location.href = "/";
            }, 3000);
          })
          .catch(() => {
            Swal.fire({
              type: "error",
              title: "Hubo un error",
              text: " No se pudo eliminar el usuario",
            });
          });
      }
    });
  });
}

export default btnEliminar;
