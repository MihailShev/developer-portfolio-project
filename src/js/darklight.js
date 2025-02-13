let styleMode = localStorage.getItem('styleMode');

const themeToggles = document.querySelectorAll('[data-theme-toggle]');

const enableDarkStyle = () => {
  document.body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');

  themeToggles.forEach(toggle => {
    const iconUse = toggle.querySelector('use');
    iconUse.setAttribute('href', '/img/icons/icon-menu.svg#icon-moon-fill');
  });
};

const disableDarkStyle = () => {
  document.body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', 'light');

  themeToggles.forEach(toggle => {
    const iconUse = toggle.querySelector('use');
    iconUse.setAttribute('href', '/img/icons/icon-menu.svg#icon-sun');
  });
};

themeToggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();

    styleMode = localStorage.getItem('styleMode');

    if (styleMode !== 'dark') {
      enableDarkStyle();
    } else {
      disableDarkStyle();
    }
  });
});

if (styleMode === 'dark') {
  enableDarkStyle();
}
