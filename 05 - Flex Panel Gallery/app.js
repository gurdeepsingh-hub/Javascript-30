const panels = document.querySelectorAll(".panel");

function addTransistion(panel) {
  this.classList.add("open");
  this.classList.add("open-active");
}
function removeTransistion(panel) {
  this.classList.remove("open");
  this.classList.remove("open-active");
}

function completeSentence() {
  this.classList.add("open-active");
}
panels.forEach((Element) =>
  Element.addEventListener("mouseenter", addTransistion)
);
panels.forEach((Element) =>
  Element.addEventListener("mouseleave", removeTransistion)
);
