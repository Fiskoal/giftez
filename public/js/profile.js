const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#wishlist-name').value.trim();
  const description = document.querySelector('#wishlist-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/wishlists`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create wishlist');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/wishlists/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete wishlist');
    }
  }
};

// document
//   .querySelector('.new-wishlist-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.wishlist-list')
//   .addEventListener('click', delButtonHandler);


let wishlistButtons = document.getElementsByClassName("wishlistButton");

for (i=0; i < wishlistButtons.length; i++) {
  wishlistButtons[i].addEventListener("click", (e) => {

    let wishlistId = e.target.getAttribute("data-wishlist");

    document.getElementById("shareButton").setAttribute("data-wishlist", wishlistId)
  })
};

document.querySelector(".wishlist-form").addEventListener("submit", async () => {
  let name = document.getElementById("new-name").value.trim();
  let desc = document.getElementById("new-description").value.trim();

  console.log(name, desc)

  const response = await fetch('/api/wishlists', {
    method: "POST",
    body: JSON.stringify({ 
      is_private: false, 
      name: name, 
      description: desc,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(response);

  if (response.ok)

  document.location.replace(document.location);

})


// TODO: CHECK ALL ROUTES AND ID TAGS, MAKE SURE THEY STILL MATCH