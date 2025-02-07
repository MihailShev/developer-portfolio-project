// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Function to handle animation sequence
let animationInterval;
function handleAnimationSequence(start) {
    const firstRowItems = document.querySelectorAll('.first-row-item');
    const secondRowItems = document.querySelectorAll('.second-row-item');
    
    if (!start) {
        clearInterval(animationInterval);
        firstRowItems.forEach(item => item.style.animationPlayState = 'paused');
        secondRowItems.forEach(item => item.style.animationPlayState = 'paused');
        return;
    }

    function playFirstRowMarqueeLine() {
        firstRowItems.forEach(item => {
            item.style.animationName = 'marqueeLine';
            item.style.animationPlayState = 'running';
        });
        secondRowItems.forEach(item => {
            item.style.animationName = 'marqueeLineReverse';
            item.style.animationPlayState = 'running';
        });
        setTimeout(playFirstRowMarqueeLineReverse, 5000);
    }
    
    function playFirstRowMarqueeLineReverse() {
        firstRowItems.forEach(item => {
            item.style.animationName = 'marqueeLineReverse';
            item.style.animationPlayState = 'running';
        });
        secondRowItems.forEach(item => {
            item.style.animationName = 'marqueeLine';
            item.style.animationPlayState = 'running';
        });
        setTimeout(playFirstRowMarqueeLine, 5000);
    }
    
    playFirstRowMarqueeLine();
}

// Function to check if elements are in viewport and control animation
function handleScroll() {
    const items = document.querySelectorAll('.first-row-item, .second-row-item');
    let inViewport = false;
    
    items.forEach(item => {
        if (isInViewport(item)) {
            inViewport = true;
        }
    });
    
    handleAnimationSequence(inViewport);
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Run on load in case elements are already in viewport
window.addEventListener('load', handleScroll);
