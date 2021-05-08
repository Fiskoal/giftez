const items = document.getElementsByClassName('wishlistItem');

for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', (e) => {
    console.log('clicked my dude');

    let title = e.target.getAttribute('data-title');
    let link = e.target.getAttribute('data-link');
    let image = e.target.getAttribute('data-image');
    let price = e.target.getAttribute('data-price');
    let wishlist = e.target.getAttribute('data-wishlist');

    console.log(title, link, image, price, wishlist);

    const postProduct = fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        wishlist_id: wishlist,
        name: title,
        amazon_link: link,
        image_link: image,
        price: price,
        quantity: 1,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  });
}
