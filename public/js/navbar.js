let toggleBtn = document.querySelector('.toggleNavbar');
let navbar = document.querySelector('.navbarMenu');
let btnContainer = document.querySelector('.navbarBtnContainer');

toggleBtn.addEventListener('click', (e) => {
  navbar.classList.toggle('hidden');
  navbar.classList.toggle('flex');
});
