const d = document;

export function stickyNavbar(nav) {
  d.addEventListener("scroll", function () {
    let header = d.querySelector(nav);
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

export function activeNav() {
  let ul = d.querySelector("ul");
  let li = d.querySelectorAll("li");
  console.log(ul);

  li.forEach((el) => {
    el.addEventListener("click", function () {
      ul.querySelector(".active").classList.remove("active");

      el.classList.add("active");
    });
  });
}

export function hamburgerMenu(panelBtn, panel, menuLink) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
