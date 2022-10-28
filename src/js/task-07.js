const flexSpan = document.querySelector('#text');
document.querySelector('#font-size-control')
.addEventListener('input', (event) =>
    flexSpan.style.fontSize = event.currentTarget.value +'px');