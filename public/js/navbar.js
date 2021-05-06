let toggleBtn = document.querySelector('.toggleNavbar');
let navbar = document.querySelector('.navbarMenu');

toggleBtn.addEventListener('click', (e) => {
  navbar.classList.toggle('hidden');
  navbar.classList.toggle('flex');
});