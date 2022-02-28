const inputEmail = document.getElementById('email');
const btn = document.getElementById('btn');
const p = document.getElementById('msg');

function validateEmail(email) {
  const ve = /\S+@\S+\.\S+/;
  return ve.test(email);
}

btn.addEventListener('click', e => {
  e.preventDefault();

  if (inputEmail.value.length <= 0) {
    inputEmail.style.border = '1px solid red';
    p.innerText = 'Please provide a valid email address.';
  }

  if (validateEmail(inputEmail.value)) {
    p.innerText = 'Email sent successfully';
    inputEmail.style.border = '2px solid green';
  } else {
    inputEmail.style.border = '1px solid red';
    p.innerText = 'Please provide a valid email address.';
  }
});
