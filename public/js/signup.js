const signupFormHandler = async (event) => {
  event.preventDefault();
  // TODO: MAKE SURE THESE TAGS STILL MATCH OUR FORM
  const username = document.querySelector('#username-signup').value.trim();
  const firstName = document.querySelector('#firstname-signup').value.trim();
  const lastName = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && firstName && lastName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      emailHandler(email);
    } else {
      alert(response.statusText);
    }
  }
};

const emailHandler = async (data) => {
  //!!! WE DO NOT AWAIT THIS FETCH REQUEST!
  const sendEmail = fetch('/api/users/email', {
    method: 'POST',
    body: JSON.stringify({ email: data }),
    headers: { 'Content-Type': 'application/json' },
  });

  if(sendEmail.ok){
    document.location.replace('/profile')
  } else {
    document.location.replace('/profile')
  };
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);