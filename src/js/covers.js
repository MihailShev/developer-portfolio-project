function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleScroll() {
const firstRowItems = document.querySelectorAll('.first-row-item');
const secondRowItems = document.querySelectorAll('.second-row-item');

let inViewport = false;

firstRowItems.forEach(item => {
if (isInViewport(item)) {
inViewport = true;
}
});

if (inViewport) {
firstRowItems.forEach(item => item.classList.add('animate'));
secondRowItems.forEach(item => item.classList.add('animateReverse'));
} else {
firstRowItems.forEach(item => item.classList.remove('animate'));
secondRowItems.forEach(item => item.classList.remove('animateReverse'));
    console.log("Hello!");
}
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);