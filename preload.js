//Preloader ==============
let elem_preloader = document.getElementById("preloader");
let body = document.getElementById("body");

body.classList.add('no-scroll');

  setTimeout(function() {
    elem_preloader.classList.remove("preloader");
    body.classList.remove("no-scroll");
  }, 5280);