let outputInput = document.querySelector('#name-output');
document.querySelector('#name-input')
.addEventListener('input', (event) => 
outputInput.innerHTML = event.currentTarget.value || 'Anonymous');