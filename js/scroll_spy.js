const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.log(entries);

    entries.forEach((entry) => {
      // console.log(entry);
      const id = entry.target.getAttribute("id");
      // console.log(id);
      if (entry.isIntersecting) {
        const link = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
        link.parentElement.classList.add("active");
      } else {
        const link = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
        link.parentElement.classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root:;
    // rootMargin: "-350px",
    threshold: 0.5,
  });

  $sections.forEach((el) => observer.observe(el));
}
