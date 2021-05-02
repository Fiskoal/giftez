const requestHandler = require("../../utils/fetchProduct")

document.querySelector("#productSearchForm").addEventListener("submit", function(e){
  e.preventDefault();

  let searchQuery = document.querySelector("#productSearchInput").value.trim();

  requestHandler(searchQuery);
  
});


// BELOW IS TEST FUNCTION, EVERYTHING WORKS AS IS :)
// function testFunction () {
//   requestHandler("socks")
// };
// testFunction();

// console.log(requestHandler)