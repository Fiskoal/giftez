module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/*.html',
      './public/**/*.html',
      './public/**/*.js',
      './views/*.handlebars',
      './views/layouts/*.handlebars',
      './views/**/*.handlebars',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [],
};
