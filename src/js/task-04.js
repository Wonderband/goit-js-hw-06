let counterValue = 0;
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const result = document.querySelector('#value');
buttonPlus.addEventListener('click', () => { 
    counterValue += 1; 
    result.innerHTML = counterValue;
});
buttonMinus.addEventListener('click', () => { 
    counterValue -= 1; 
    result.innerHTML = counterValue;
});

