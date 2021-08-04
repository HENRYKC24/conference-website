// Mobile Menu
const menuButton = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');
menuButton.classList.replace('fa-bars', 'fa-times');
menuButton.classList.replace('fa-times', 'fa-bars');

const showMobileMenu = () => {
  console.log(navbar);
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-bars');
  menuButton.classList.toggle('fa-times');
};

menuButton.addEventListener('click', showMobileMenu);