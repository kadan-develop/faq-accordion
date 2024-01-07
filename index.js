"use-static";

const h2El = document.querySelectorAll("h2");

h2El.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.nextElementSibling.nextElementSibling.className === "hide") {
      el.nextElementSibling.nextElementSibling.classList.remove("hide");
      el.nextElementSibling.attributes.src.nodeValue =
        "./assets/images/icon-minus.svg";
    } else {
      el.nextElementSibling.nextElementSibling.classList.add("hide");
      el.nextElementSibling.attributes.src.nodeValue =
        "./assets/images/icon-plus.svg";
    }
  });
});
