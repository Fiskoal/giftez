document
  .getElementById('accept-cookies')
  .addEventListener('click', function () {
    let cookieBanner = document.getElementById('cookieBanner');

    localStorage.setItem('cookieSeen', 'shown');

    if (localStorage.cookieSeen == 'shown') {
      cookieBanner.style.display = 'none';
    }
  });

function loadCookieBanner() {
  localStorage.getItem('cookieSeen');

  if (localStorage.cookieSeen === 'shown') {
    document.getElementById('cookieBanner').style.display = 'none';
    console.log('Shouldnt show cookie');
  }
}

window.onload = loadCookieBanner();
