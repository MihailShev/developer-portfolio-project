const loader = document.querySelector('.loader-container-site');

const viewLoader = () => {
  loader.style.display = 'block';
};

const hideLoader = () => {
  loader.style.display = 'none';
};

window.addEventListener('load', () => {
  hideLoader();
});

document.addEventListener('DOMContentLoaded', () => {
  viewLoader();
});
