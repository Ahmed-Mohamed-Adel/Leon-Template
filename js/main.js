let span = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (this.scrollY >= 600) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
