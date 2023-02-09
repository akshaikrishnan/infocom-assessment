var image = document.getElementsByClassName("parallax");
new simpleParallax(image, {
  scale: 1.2,
});

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 700) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
