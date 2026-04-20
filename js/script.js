const navbarBtn = document.querySelector('.navbar-btn');
const navbar = document.querySelector('.navbar');
const bookingBtn = document.querySelector('.header-btn[href="pages/booking.html"]');
const pricingBtn = document.querySelector('.header-btn[href="pages/pricing.html"]');
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navbarBtn.addEventListener('click', () => {
    navbarBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });