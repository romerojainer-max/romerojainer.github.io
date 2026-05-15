const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

/* MENU RESPONSIVE */

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* FORMULARIO */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Gracias por contactarnos 💖");

  form.reset();

});