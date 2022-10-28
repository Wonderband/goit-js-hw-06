function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let lastBoxSize = 20;
function createBoxes(amount) {    
  let boxArea = document.querySelector('#boxes');
  for (let i = 1; i <= amount; i += 1 ) {
    let insertBox = document.createElement('div');
    lastBoxSize += i * 10;
    insertBox.style.height = lastBoxSize +'px';
    insertBox.style.width = lastBoxSize + 'px';
    insertBox.style.backgroundColor = getRandomHexColor();    
    boxArea.append(insertBox);    
  }
}

function destroyBoxes() {
  let childBoxes = document.querySelector('#boxes').children;  
  for (let i = childBoxes.length - 1;  i >= 0; i -= 1) {
    childBoxes[i].remove();    
  }  
  lastBoxSize = 20;
}

let inputnumber;
document.querySelector('input')
.addEventListener('input', (event) => inputnumber = event.currentTarget.value );

document.querySelector('button[data-create]')
.addEventListener('click', (event) => createBoxes(inputnumber));

document.querySelector('button[data-destroy]')
.addEventListener('click', (event) => destroyBoxes());


