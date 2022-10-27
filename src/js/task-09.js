function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let newColor;
document.querySelector('.change-color')
.addEventListener('click', () => { 
  newColor = getRandomHexColor();
  document.querySelector('.color').innerHTML =  newColor;
  document.querySelector('body').style.backgroundColor = newColor; 
});

