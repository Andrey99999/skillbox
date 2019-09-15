let form = document.getElementById('form');
form.addEventListener('submit', validate)

function validate(e) {
    e.preventDefault();
    // input name
    let inputName = document.getElementById('input__name');
    let errorName = document.querySelector('.error.error__name');

    // input phone
    let inputPhone = document.getElementById('input__phone');
    let errorPhone = document.querySelector('.error.error__phone');

    // input email
    let inputEmail = document.getElementById('input__email');
    let errorEmail = document.querySelector('.error.error__email');

    // checkbox
    let check = document.getElementById('check');
    let errorCheckBox = document.querySelector('.error.error__check');
    let labelCheck = document.querySelector('#label__check');
  
    // input name
    if (inputName.value === "") {
      inputName.style.border = '2px solid red';
      errorName.innerHTML = 'Введите имя';
      return false;
    } else {
       inputName.style.border = '';
       errorName.innerHTML = '';
      }

    // input phone
    if (inputPhone.value === "") {
      inputPhone.style.border = '2px solid red';
      errorPhone.innerHTML = 'Введите телефон';
      return false;
    } else {
       inputPhone.style.border = '';
       errorPhone.innerHTML = '';
      }

    // input email
    if (inputEmail.value === "") {
      inputEmail.style.border = '2px solid red';
      errorEmail.innerHTML = 'Введите email';
      return false;
    } else {
       inputEmail.style.border = '';
       errorEmail.innerHTML = '';
      }

      // input checkbox
    if (!check.checked) {
      labelCheck.classList.add('error');
      errorCheckBox.innerHTML = 'Подвердите условия';
      return false;
    } else {
      labelCheck.classList.remove('error');
       errorCheckBox.innerHTML = '';
      }

      let userData = {
        name: inputName.value,
        phone: inputPhone.value,
        email: inputEmail.value,
        check: check.checked
      }
      console.log(userData);
      return userData;
}