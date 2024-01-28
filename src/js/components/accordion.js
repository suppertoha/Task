document.querySelectorAll(".accordion-start-js").forEach((el) => {
  el.addEventListener("click", () => {
    const elems = document.querySelectorAll(".accordion-start-js");
    elems.forEach((elem) => {
      if (elem !== el) {
        elem.classList.remove("open");
        elem.nextElementSibling.classList.remove("open");
      }
    });
    el.classList.toggle("open");
    let content = el.nextElementSibling;
    if (content.classList.contains("open")) {
      document.querySelectorAll(".accordion-content-js").forEach((el) => {
        if (content && content.classList.contains("open")) {
          content.classList.remove("open");
        }
      });
    } else {
      document.querySelectorAll(".accordion-content-js").forEach((el) => {
        if (content && !content.classList.contains("open")) {
          content.classList.add("open");
        }
      });
    }
  });
});



