

//menu navigation ==============
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

//menu navigation (open e close) ==============
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

//carrossel (swiperjs) ==============
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

//animacoes scroll (AOS ANIMATION) ==============
AOS.init({
  duration: 1200,
});

// Modal Login
const modalLogin = document.getElementById("modalLogin");
const openModalBtns = document.querySelectorAll(".openModalLogin");
const closeModalBtn = document.querySelector(".close");


// Abrir o modal ao clicar no botão
openModalBtns.forEach(button => {
  button.onclick = function() {
      modalLogin.style.display = "inherit";
  };
});

// Fechar o modal ao clicar no "X"
closeModalBtn.onclick = function() {
    modalLogin.style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === modalLogin) {
        modalLogin.style.display = "none";
    }
}

// Modal Recuperar Senha
const modalRecuperar = document.getElementById("modalRecuperar");
const openModalBtnsRecuperar = document.querySelectorAll(".openModalRecuperar");
const closeModalBtnRecuperar = document.querySelector(".closeRecuperar");


// Abrir o modal ao clicar no botão
openModalBtnsRecuperar.forEach(button => {
  button.onclick = function() {
      modalRecuperar.style.display = "inherit";
      modalLogin.style.display = "none";
  };
});

// Fechar o modal ao clicar no "X"
closeModalBtnRecuperar.onclick = function() {
    modalRecuperar.style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === modalRecuperar) {
        modalRecuperar.style.display = "none";
    }
}

// Modal Alterar Senha
const modalAlterar = document.getElementById("modalAlterar");
const openModalBtnsAlterar = document.querySelectorAll(".openModalAlterar");
const closeModalBtnAlterar = document.querySelector(".closeAlterar");


// Abrir o modal ao clicar no botão
openModalBtnsAlterar.forEach(button => {
  button.onclick = function() {
      modalAlterar.style.display = "inherit";
      modalRecuperar.style.display = "none";
  };
});

// Fechar o modal ao clicar no "X"
closeModalBtnAlterar.onclick = function() {
    modalAlterar.style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === modalAlterar) {
        modalAlterar.style.display = "none";
    }
}



