document.getElementById('switchTheme').addEventListener('click', function () {
  let htmlClasses = document.querySelector('html').classList;

  if (localStorage.theme == 'dark') {
    htmlClasses.remove('dark');
    localStorage.removeItem('theme');
    console.log('Light');
  } else {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';
    console.log('Dark');
  }
});

if (
  localStorage.theme === 'dark' ||
  (!'theme' in localStorage &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark');
  
} else if (localStorage.theme === 'dark') {
  document.querySelector('html').classList.add('dark');
}
