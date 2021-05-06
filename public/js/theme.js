document.getElementById('switchTheme').addEventListener('click', function () {
  let htmlClasses = document.querySelector('html').classList;

  if (localStorage.theme == 'dark') {
    htmlClasses.remove('dark');
    localStorage.removeItem('theme');
  } else {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';
  }
});

function loadTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!'theme' in localStorage &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.querySelector('html').classList.add('dark');
    document.getElementById('switchTheme').checked = true;
  } else if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark');
    document.getElementById('switchTheme').checked = true;
  }
}

window.onload = loadTheme();
