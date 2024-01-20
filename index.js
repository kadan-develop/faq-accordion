"use-static";

const que = document.querySelectorAll(".question");
const img = document.querySelectorAll(".icon");
const para = document.querySelectorAll(".question p");

que.forEach((q, index) => {
  q.addEventListener("click", () => {
    if (para[index].style.display == "block") {
      para[index].style.display = "none";
      img[index].setAttribute("src", "./assets/images/icon-plus.svg");
    } else {
      para[index].style.display = "block";
      img[index].setAttribute("src", "./assets/images/icon-minus.svg");
    }
  });
});
