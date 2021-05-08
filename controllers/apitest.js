const axios = require('axios');

const params = {
  api_key: '4E88E04A63FE47E28372CD52A485307C',
  type: 'search',
  amazon_domain: 'amazon.com',
  search_term: "socks",
  page: 1,
};
axios
  .get('https://api.rainforestapi.com/request', { params })
  .then((response) => {
    console.log(response)
  })