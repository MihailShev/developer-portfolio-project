function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

let animationInterval = null; // Store interval reference

function handleScroll() {
    const coversSection = document.querySelector('.covers-section');
    const firstRowItems = document.querySelectorAll('.first-row-item');
    const secondRowItems = document.querySelectorAll('.second-row-item');

    if (isInViewport(coversSection)) {
        if (!animationInterval) {
            startLoopAnimation(firstRowItems, secondRowItems);
        }
    } else {
        stopLoopAnimation(firstRowItems, secondRowItems);
    }
}

function startLoopAnimation(firstRow, secondRow) {
    function swapAnimations() {
        // Step 1: First row uses "animate", Second row uses "animateReverse"
        firstRow.forEach(item => {
            item.classList.add('animate');
            item.classList.remove('animateReverse');
        });
        secondRow.forEach(item => {
            item.classList.add('animateReverse');
            item.classList.remove('animate');
        });

        setTimeout(() => {
            // Step 2: Swap animations after 5 seconds
            firstRow.forEach(item => {
                item.classList.remove('animate');
                item.classList.add('animateReverse');
            });
            secondRow.forEach(item => {
                item.classList.remove('animateReverse');
                item.classList.add('animate');
            });
        }, 5000);
    }

    // Start animation loop
    swapAnimations();
    animationInterval = setInterval(swapAnimations, 10000); // Repeat every 10 seconds
}

function stopLoopAnimation(firstRow, secondRow) {
    clearInterval(animationInterval);
    animationInterval = null;

    // Remove animation classes when out of viewport
    firstRow.forEach(item => {
        item.classList.remove('animate', 'animateReverse');
    });
    secondRow.forEach(item => {
        item.classList.remove('animate', 'animateReverse');
    });
}

// Attach event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);