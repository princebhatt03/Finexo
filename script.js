// Hamburger Navbar...

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav2 ul');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
const navLink = document.querySelectorAll('.nav2 a');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

// AOS...

AOS.init();

// Loader...

var loader = document.querySelector('.loader');
var loadingOverlay = document.querySelector('.overlay1');

document.addEventListener('DOMContentLoaded', function () {
  loader.classList.remove('loader');
  loadingOverlay.style.display = 'none';
});
