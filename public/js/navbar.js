let toggleBtn = document.querySelector('.toggleNavbar');
let navbar = document.querySelector('#navbar');

toggleBtn.addEventListener('click', (e) => {
  navbar.classList.toggle('hidden');
  navbar.classList.toggle('flex');
});