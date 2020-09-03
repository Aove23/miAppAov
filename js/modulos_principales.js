import { stickyNavbar, activeNav, hamburgerMenu } from "./sticky_Navbar.js";
import { maquinaEscribir } from "./typed.js";
import scrollTop from "./scroll_top.js";
import { filtradoyBusqueda, overlayPortfolio, cerrarOverlay } from "./muuri.js";
import validacionForm from "./form.js";
import scrollSpy from "./scroll_spy.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //NavBar JS
  stickyNavbar("header");
  activeNav();
  hamburgerMenu(".panel-btn", ".panel", ".menu-panel a");
  //Banner
  maquinaEscribir(".typed");
  scrollTop();
  //Portafolio
  filtradoyBusqueda();
  overlayPortfolio();
  cerrarOverlay();
  //Formulario
  validacionForm();
  //Scroll-Spia
  scrollSpy();
});
