// If cookie already exists, don't show banner re: accepting cookies.
// If no cookie found, show banner.

function showBanner() {
  return {
    show: true,
    cookieName: 'myCookie',
    setCookie(days = 7) {
      let d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      let expires = 'expires=' + d.toUTCString();
      document.cookie =
        this.cookieName + '=' + !this.show + ';' + expires + ';path=/';

      this.show = false;
    },
    getCookie() {
      let matches = document.cookie.match(
        new RegExp(
          '(?:^|; )' +
            this.cookieName.replace(
              /([\.$?*|{}\(\)\[\]\/\+^])/g,
              '\' ) + "=([^;]*)"'
            )
        )
      );
      return matches ? decodeURIComponent(matches[1]) : 'true';
    },
    checkCookie() {
      return (this.show = this.getCookie() === 'true');
    },
  };
}
