let checkbox = document.getElementById('dark-mode-checkbox');
let body = document.body;

checkbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});