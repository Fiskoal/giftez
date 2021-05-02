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

document
  .querySelector('.new-wishlist-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.wishlist-list')
  .addEventListener('click', delButtonHandler);


// TODO: CHECK ALL ROUTES AND ID TAGS, MAKE SURE THEY STILL MATCH