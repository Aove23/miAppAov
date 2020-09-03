const d = document,
  w = window;

export default function scrollTop() {
  const $btnVerMas = d.querySelector(".btn-vermas");
  const $parrafo = d.querySelector(".text-white");
  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 5) {
      $btnVerMas.classList.add("none");
      $parrafo.classList.add("none");
    } else {
      $btnVerMas.classList.remove("none");
      $parrafo.classList.remove("none");
    }
  });
}
