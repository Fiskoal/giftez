const axios = require('axios')

const searchHandler = async (data) => {
  fetch(`https://api.rainforestapi.com/request?api_key=D20D90E9917D418AA166FEB5285C9F85&type=search&amazon_domain=amazon.com&search_term=${data}`)
};