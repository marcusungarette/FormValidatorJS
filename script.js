const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  console.log(username.value);

  if (username.value === '') {
    showError(username, 'Campo Obrigatorio');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Campo Obrigatorio');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Coloque um email valido');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Campo Obrigatorio');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'Campo Obrigatorio');
  } else {
    showSuccess(password2);
  }
});