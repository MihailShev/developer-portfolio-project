function handleScroll() {
const firstRowItems = document.querySelectorAll('.first-row-item');
const secondRowItems = document.querySelectorAll('.second-row-item');

let inViewport = true;

firstRowItems.forEach(item => {
if (isInViewport(item)) {
inViewport = true;
}
});

if (inViewport) {
firstRowItems.forEach(item => item.classList.add('animate'));
secondRowItems.forEach(item => item.classList.add('animate'));
} else {
firstRowItems.forEach(item => item.classList.remove('animate'));
secondRowItems.forEach(item => item.classList.remove('animate'));
}
}