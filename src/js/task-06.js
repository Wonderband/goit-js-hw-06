let inputField = document.querySelector('#validation-input');
inputField.addEventListener('blur', (event) => {    
    if (event.currentTarget.value.length !== 6) {
        inputField.classList.add('invalid');
        if (inputField.classList.contains('valid')) inputField.classList.remove('valid');
    }        
    else {
        inputField.classList.add('valid');
        if (inputField.classList.contains('invalid')) inputField.classList.remove('invalid');
    }    
});
