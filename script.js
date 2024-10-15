

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
const closeModalRecuperar = document.querySelector(".closeEmailEnviado");


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

// Fechar o modal ao clicar no botão
closeModalRecuperar.onclick = function() {
  modalRecuperar.style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === modalRecuperar) {
        modalRecuperar.style.display = "none";
    }
}

document.querySelector('.openEmailEnviado').addEventListener('click', function(event) {
  event.preventDefault();  // Para evitar comportamento padrão do link

  // Esconder a caixa .login
  document.querySelector('.login.enviarEmail').style.display = 'none';
  
  // Mostrar a caixa .login.emailEnviado
  document.querySelector('.login.emailEnviado').style.display = 'block';
});



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

// Alerts
document.addEventListener('DOMContentLoaded', () => {
  const alertButtons = document.querySelectorAll('.btn-alert');
  const closeButtons = document.querySelectorAll('.close-alert');

  // Função para exibir o alerta
  const showAlert = (alertClass) => {
      const alert = document.querySelector(`.alert-${alertClass}`);
      alert.classList.add('show-alert');

      // Fechar automaticamente após 5 segundos
      setTimeout(() => {
          closeAlert(alert);
      }, 5000);
  };

  // Função para fechar o alerta
  const closeAlert = (alert) => {
      alert.classList.remove('show-alert');
      alert.classList.add('hide-alert');

      // Remover completamente o alerta da tela após a animação
      setTimeout(() => {
          alert.classList.remove('hide-alert');
      }, 500);
  };

  // Atribuir evento aos botões de alerta
  alertButtons.forEach(button => {
      button.addEventListener('click', () => {
          const alertType = button.getAttribute('data-alert');
          showAlert(alertType);
      });
  });

  // Atribuir evento ao ícone de fechar
  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const alert = button.closest('.alert');
          closeAlert(alert);
      });
  });
});





