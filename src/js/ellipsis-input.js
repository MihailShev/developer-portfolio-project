// for correct operation of the ellipsis in the input in different browsers
const inputWorkTogether = document.querySelector('[readonly]')

inputWorkTogether.addEventListener('focus', function() {
  this.removeAttribute('readonly');
});

inputWorkTogether.addEventListener('blur', function() {
  this.setAttribute('readonly', true);
  if (this.validity.valid) {
    if (this.value.trim() !== '') {
      this.style.borderColor = '#3cbc81';
    } else {
      this.value = '';
      this.style.borderColor = 'rgba(250, 250, 250, 0.2)';
    }
  }
});