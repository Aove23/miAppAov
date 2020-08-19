let grid = new Muuri(".grid", {
  layout: {
    rounding: false,
  },
});

const d = document;

export function filtradoyBusqueda() {
  grid.refreshItems().layout();
  d.getElementById("grid").classList.add("imagenes-cargadas");

  //Agregamos los listener de los enlaces para filtrar por categoria
  const enlaces = d.querySelectorAll("#categorias a");
  enlaces.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove("activo"));
      e.target.classList.add("activo");

      const categoria = e.target.innerHTML.toLowerCase();
      categoria === "todos"
        ? grid.filter("[data-categoria]")
        : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });

  //Agregamos el listener para la barra de busquedas
  d.querySelector("#barra-busqueda").addEventListener("input", (e) => {
    const busqueda = e.target.value;
    grid.filter((item) =>
      item.getElement().dataset.etiquetas.includes(busqueda)
    );
  });
}

export function overlayPortfolio() {
  //Agregamos el listener para el overlay
  const overlay = d.getElementById("overlay");
  // const imagenes = document.querySelectorAll(".grid .item img");
  const portadas = d.querySelectorAll(".item .item-hover");
  const btnCerrar = d.getElementById("btn-cerrar-popup");
  portadas.forEach((el) => {
    el.addEventListener("click", (e) => {
      const ruta = el.parentElement.firstElementChild.getAttribute("src");
      const titulo = el.parentElement.parentElement.dataset.titulo;
      const description = el.parentElement.parentElement.dataset.descripcion;
      const tipo = el.parentElement.parentElement.dataset.tipo;

      overlay.classList.add("activo");
      d.querySelector("#overlay .img-overlay").src = ruta;

      if (tipo === "Trabajo") {
        d.querySelector("#overlay .descripcion .svg-descripcion").src =
          "recursos/job.svg";
      } else {
        d.querySelector("#overlay .descripcion .svg-descripcion").src =
          "recursos/proy.svg";
      }

      d.querySelector("#overlay .titulo-overlay").textContent = titulo;
      d.querySelector("#overlay .descripcion-overlay").innerHTML = description;
    });
  });
}

export function cerrarOverlay() {
  //Eventlistener del boton cerrar
  const overlay = d.getElementById("overlay");
  d.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
    overlay.classList.remove("activo");
  });

  //Eventlistener del overlay
  overlay.addEventListener("click", (e) => {
    if (e.target.id === "overlay") {
      overlay.classList.remove("activo");
    }
  });
}
