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
const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = orderForm.querySelector("button[type='submit']");
    const formData = new FormData(orderForm);

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch(orderForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        window.location.href = "thankyou.html";
      } else {
        alert("Something went wrong. Please try again or message us on WhatsApp.");
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Request Design";
        }
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet and try again.");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Request Design";
      }
    }
  });
}