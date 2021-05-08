function copy(e) {
  console.log("copy thing")
  navigator.clipboard.writeText(document.location);
};

const LGTMBBQ = async (e) => {
  let thePlace = window.location.pathname;
  
  await fetch(`/api${thePlace}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  
  document.location.replace("/profile");
};

const items = document.getElementsByClassName('productDelete');

for (i=0; i<items.length; i++) {
  items[i].addEventListener("click", async (e) => {
    const id = e.target.getAttribute("data-id");
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    })
    console.log(id)
    document.location.replace(document.location);
  });

};

document.getElementById("shareButton").addEventListener("click", copy);

document.getElementById("deleteButton").addEventListener("click", LGTMBBQ);