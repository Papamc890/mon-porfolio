// Apparition progressive des éléments au chargement
document.querySelectorAll(".reveal").forEach((el, i) => {
  setTimeout(() => el.classList.add("visible"), 120 * i);
});
