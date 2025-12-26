const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

/* MENU MOBILE */
menuBtn.addEventListener("click", () => {
  mobileMenu.style.left =
    mobileMenu.style.left === "0px" ? "-100%" : "0px";
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
  });
});

/* WHATSAPP COM MENSAGEM */
function agendarWhatsapp() {
  const telefone = "5599999999999"; // TROQUE
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta. Poderia me informar os horários disponíveis?"
  );
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}

/* ANIMAÇÃO AO SCROLL */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* MENU ATIVO */
const sections = document.querySelectorAll("header, section");
const menuLinks = document.querySelectorAll(".menu-desktop a, .mobile-menu a");

function activateMenu() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateMenu);
