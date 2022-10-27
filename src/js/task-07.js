const flexSpan = document.querySelector('#text');
document.querySelector('#font-size-control')
.addEventListener('change', (event) =>
    flexSpan.style.fontSize = event.currentTarget.value +'px');