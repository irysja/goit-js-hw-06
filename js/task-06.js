const input = document.querySelector('#validation-input');
const validationLength = Number(input.dataset.length);
input.addEventListener('blur', () => {
    if (input.value.length === validationLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});