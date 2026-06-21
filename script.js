const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const siteLoader = document.getElementById("siteLoader");

if(menuBtn && navLinks){
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

window.addEventListener("load", () => {
  if(siteLoader){
    setTimeout(() => {
      siteLoader.classList.add("hide");
    }, 900);
  }
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(elementTop < windowHeight - 80){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();