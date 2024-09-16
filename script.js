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
const modal = document.getElementById("modalLogin");
const openModalBtn = document.getElementById("openModalLogin");
const closeModalBtn = document.querySelector(".close");

// Abrir o modal ao clicar no botão
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal ao clicar no "X"
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

