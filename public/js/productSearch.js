// redirect to search results
document.querySelector("#productSearchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchQuery = document.querySelector("#productSearchInput").value.trim();

  document.location.replace(`/search/${searchQuery}`);
});
