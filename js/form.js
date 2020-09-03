const d = document;

export default function validacionForm() {
  const $form = d.querySelector(".contacto-formulario"),
    $inputs = d.querySelectorAll(".contacto-formulario [required]");

  // Expresiones para validar Form

  // const expresiones = {
  //   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  //   nombre: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
  //   password: /^.{4,12}$/,
  //   correo: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  //   telefono: /^\d{7,14}$/,
  // };

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contacto-formulario [required]")) {
      const $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern === $input.pattern && $input.value !== "") {
        //Si el valor del input no coincide con la expresion regular
        let regex = new RegExp(pattern);
        if (!regex.exec($input.value)) {
          //No valida
          d.getElementById(`grupo__${$input.name}`).classList.add(
            "formulario__grupo-incorrecto"
          );
          d.querySelector(`#grupo__${$input.name} i`).classList.add(
            "fa-times-circle"
          );
          d.querySelector(`#grupo__${$input.name} i`).classList.remove(
            "fa-check-circle"
          );
          d.querySelector(
            `#grupo__${$input.name} .formulario__input-error`
          ).classList.add("formulario__input-error-activo");
        } else {
          //Si valida
          d.getElementById(`grupo__${$input.name}`).classList.remove(
            "formulario__grupo-incorrecto"
          );
          d.getElementById(`grupo__${$input.name}`).classList.add(
            "formulario__grupo-correcto"
          );
          d.querySelector(`#grupo__${$input.name} i`).classList.add(
            "fa-check-circle"
          );
          d.querySelector(`#grupo__${$input.name} i`).classList.remove(
            "fa-times-circle"
          );
          d.querySelector(
            `#grupo__${$input.name} .formulario__input-error`
          ).classList.remove("formulario__input-error-activo");
        }
      }

      // Los que tienen patron por medio de dataset
      if (pattern === $input.dataset.pattern && $input.focus) {
        let regex = new RegExp(pattern);
        if (!regex.exec($input.value)) {
          //Si no coincide o es vacio
          d.querySelector(
            `#grupo__${$input.dataset.comentarios} .formulario__input-error`
          ).classList.add("formulario__input-error-activo");
        } else {
          d.querySelector(
            `#grupo__${$input.dataset.comentarios} .formulario__input-error`
          ).classList.remove("formulario__input-error-activo");
        }
      }

      //Validamos los inputs que no tienen patron

      // if (!pattern) {
      //   if($input.value === ""){
      //     const $validarData =  $input.dataset.ciudad
      //     document.querySelector(`#grupo__${$validarData} .formulario__input-error`).classList.add('formulario__input-error-activo');
      //   }else{
      //     document.querySelector(`#grupo__${$validarData} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      //   }
      // }

      //Limpiamos errores cuando se borra
      if ($input.value === "") {
        d.getElementById(`grupo__${$input.name}`).classList.remove(
          "formulario__grupo-incorrecto"
        );
        d.getElementById(`grupo__${$input.name}`).classList.remove(
          "formulario__grupo-correcto"
        );
        d.querySelector(
          `#grupo__${$input.name} .formulario__input-error`
        ).classList.remove("formulario__input-error-activo");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    const $loader = d.querySelector(
        ".formulario__btn-enviar .contact-form-loader"
      ),
      $respuesta = d.querySelector(".alerta-exito");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $respuesta.classList.remove("none");
      const elementosForm = d.querySelectorAll(".formulario__grupo");
      const recorriendo = elementosForm.forEach((el) => {
        el.classList.remove("formulario__grupo-correcto");
        el.classList.remove("fa-check-circle");
      });
      $form.reset();

      setTimeout(() => $respuesta.classList.add("none"), 3000);
    }, 3000);
  });
}
