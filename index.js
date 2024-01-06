"use-static";

const iconBtn = document.querySelectorAll(".icon");

iconBtn.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.nextElementSibling.className === "hide") {
      el.nextElementSibling.classList.remove("hide");
      el.attributes.src.nodeValue = "./assets/images/icon-minus.svg";
    } else {
      el.nextElementSibling.classList.add("hide");
      el.attributes.src.nodeValue = "./assets/images/icon-plus.svg";
    }
  });
});
