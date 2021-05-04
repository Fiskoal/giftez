const axios = require('axios')

const searchHandler = function (data) {
  const params = {
    api_key: "D20D90E9917D418AA166FEB5285C9F85",
    type: "search",
    amazon_domain: "amazon.com",
    search_term: data,
  }
  axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {
    console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.log(error)
  })
};

module.exports = searchHandler