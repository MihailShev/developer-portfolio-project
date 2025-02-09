// for correct operation of the ellipsis in the input in different browsers
const inputWorkTogether = document.querySelector('[readonly]')

inputWorkTogether.addEventListener('focus', function() {
  this.removeAttribute('readonly');
});

inputWorkTogether.addEventListener('blur', function() {
  this.setAttribute('readonly', true);
  if (this.validity.valid) {
    if (this.value.trim() !== '') {
      this.classList.add('js-success');
    } else {
      this.value = '';
      this.classList.remove('js-success');
    }
  }
});
