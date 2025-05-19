//Configurar SW
let swLocation = "sw.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/sw.js"; //Varia según el host
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello world!!");

document.querySelectorAll('.navbar__menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelector(".navbar__toggle").addEventListener("click", () => {
  const menu = document.querySelector(".navbar__menu");
  menu.classList.toggle("show"); // Alterna la clase 'show'
});